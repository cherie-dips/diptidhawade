import { useCallback, useEffect, useRef, useState } from "react";
import {
  generateShamir,
  imageDataToCanvas,
  reconstructShamir,
  toGray,
} from "../lib/visualSecretShamir.js";
import "../styles/visual-secret-demo.css";

const W = 200;
const H = 200;

function ShareTile({ sh, onPick, onDelete, showDelete, draggingId, setDraggingId }) {
  const cRef = useRef(null);
  useEffect(() => {
    const c = cRef.current;
    if (!c) return;
    const { imageData, w: iw, h: ih } = sh.shareObj;
    c.width = iw;
    c.height = ih;
    c.getContext("2d").putImageData(imageData, 0, 0);
  }, [sh.shareObj]);

  return (
    <div
      className={`share-tile ${draggingId === sh.id ? "dragging" : ""}`}
      draggable
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPick(sh.id);
        }
      }}
      data-id={sh.id}
      onDragStart={(e) => {
        e.dataTransfer.setData("shId", sh.id);
        setDraggingId(sh.id);
      }}
      onDragEnd={() => setDraggingId(null)}
      onClick={() => onPick(sh.id)}
    >
      <canvas ref={cRef} />
      <div className="tlabel">
        {sh.label} {sh.method.toUpperCase()} · k={sh.k} n={sh.n}
      </div>
      {showDelete && onDelete && (
        <button type="button" className="del" onClick={(e) => { e.stopPropagation(); onDelete(sh.id); }} aria-label="Remove share">
          ×
        </button>
      )}
    </div>
  );
}

export default function VisualSecretDemo() {
  const dcRef = useRef(null);
  const ocRef = useRef(null);
  const fileSecretRef = useRef(null);
  const fileSharesRef = useRef(null);

  const [activeTab, setActiveTab] = useState("gen");
  const [tool, setTool] = useState("pen");
  const [brushSize, setBrushSize] = useState(8);
  const [nVal, setNVal] = useState(3);
  const [kVal, setKVal] = useState(2);
  const [shares, setShares] = useState([]);
  const [overlaid, setOverlaid] = useState([]);
  const [genStatus, setGenStatus] = useState({ msg: "", cls: "" });
  const [recStatus, setRecStatus] = useState({ msg: "", cls: "" });
  const [ulStatus, setUlStatus] = useState({ msg: "", cls: "" });
  const [genProgress, setGenProgress] = useState(null);
  const [dropOver, setDropOver] = useState(false);
  const [draggingId, setDraggingId] = useState(null);
  const [entropy, setEntropy] = useState({ pct: 0, note: "No shares overlaid yet", ok: false });

  const drawingRef = useRef(false);

  const syncKN = useCallback((nextN, nextK) => {
    let n = nextN;
    let k = nextK;
    if (k > n) k = n;
    if (k < 2) k = 2;
    if (n < 2) n = 2;
    setNVal(n);
    setKVal(k);
  }, []);

  const getDctx = () => dcRef.current?.getContext("2d", { willReadFrequently: true });

  const clearDraw = useCallback(() => {
    const dctx = getDctx();
    if (!dctx) return;
    dctx.fillStyle = "#fff";
    dctx.fillRect(0, 0, W, H);
  }, []);

  const drawExample = useCallback(() => {
    const dctx = getDctx();
    if (!dctx) return;
    dctx.fillStyle = "#fff";
    dctx.fillRect(0, 0, W, H);
    dctx.fillStyle = "#000";
    dctx.font = 'bold 34px "IBM Plex Mono", monospace';
    dctx.fillText("SECRET", 8, 80);
    dctx.font = 'bold 18px "IBM Plex Mono", monospace';
    dctx.fillText("Shamir (k,n)", 20, 116);
    dctx.lineWidth = 6;
    dctx.strokeStyle = "#000";
    dctx.beginPath();
    dctx.arc(50, 168, 22, 0, Math.PI * 2);
    dctx.stroke();
    dctx.fillRect(68, 162, 80, 10);
    dctx.fillRect(120, 172, 10, 14);
    dctx.fillRect(138, 172, 10, 14);
  }, []);

  useEffect(() => {
    const c = dcRef.current;
    if (!c) return;
    c.width = W;
    c.height = H;
    drawExample();
  }, [drawExample]);

  const getXY = useCallback((e) => {
    const c = dcRef.current;
    if (!c) return [0, 0];
    const r = c.getBoundingClientRect();
    const sx = W / r.width;
    const sy = H / r.height;
    const cx = (e.clientX ?? e.touches?.[0]?.clientX ?? 0) - r.left;
    const cy = (e.clientY ?? e.touches?.[0]?.clientY ?? 0) - r.top;
    return [cx * sx, cy * sy];
  }, []);

  const floodFill = useCallback((x0, y0, fillRGB) => {
    const dctx = getDctx();
    if (!dctx) return;
    x0 = Math.floor(x0);
    y0 = Math.floor(y0);
    const id = dctx.getImageData(0, 0, W, H);
    const d = id.data;
    const idx = (y0 * W + x0) * 4;
    const tr = d[idx];
    const tg = d[idx + 1];
    const tb = d[idx + 2];
    if (tr === fillRGB[0] && tg === fillRGB[1] && tb === fillRGB[2]) return;
    const stack = [[x0, y0]];
    while (stack.length) {
      const [cx, cy] = stack.pop();
      if (cx < 0 || cx >= W || cy < 0 || cy >= H) continue;
      const i = (cy * W + cx) * 4;
      if (d[i] !== tr || d[i + 1] !== tg || d[i + 2] !== tb) continue;
      d[i] = fillRGB[0];
      d[i + 1] = fillRGB[1];
      d[i + 2] = fillRGB[2];
      d[i + 3] = 255;
      stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]);
    }
    dctx.putImageData(id, 0, 0);
  }, []);

  const onMouseDown = useCallback(
    (e) => {
      drawingRef.current = true;
      const [x, y] = getXY(e);
      const dctx = getDctx();
      if (!dctx) return;
      if (tool === "fill") {
        floodFill(x, y, [0, 0, 0]);
        drawingRef.current = false;
        return;
      }
      dctx.beginPath();
      dctx.moveTo(x, y);
      dctx.fillStyle = tool === "erase" ? "#fff" : "#000";
      dctx.beginPath();
      dctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
      dctx.fill();
      dctx.beginPath();
      dctx.moveTo(x, y);
    },
    [brushSize, floodFill, getXY, tool]
  );

  const onMouseMove = useCallback(
    (e) => {
      if (!drawingRef.current || tool === "fill") return;
      const [x, y] = getXY(e);
      const dctx = getDctx();
      if (!dctx) return;
      dctx.lineWidth = brushSize;
      dctx.lineCap = "round";
      dctx.lineJoin = "round";
      dctx.strokeStyle = tool === "erase" ? "#ffffff" : "#000000";
      dctx.lineTo(x, y);
      dctx.stroke();
      dctx.beginPath();
      dctx.moveTo(x, y);
    },
    [brushSize, getXY, tool]
  );

  const endDraw = useCallback(() => {
    drawingRef.current = false;
  }, []);

  const loadImg = useCallback(
    (ev) => {
      const f = ev.target.files?.[0];
      if (!f) return;
      const img = new Image();
      img.onload = () => {
        const dctx = getDctx();
        if (!dctx) return;
        dctx.fillStyle = "#fff";
        dctx.fillRect(0, 0, W, H);
        const s = Math.min(W / img.width, H / img.height);
        const w = img.width * s;
        const h = img.height * s;
        dctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
        URL.revokeObjectURL(img.src);
      };
      img.src = URL.createObjectURL(f);
      ev.target.value = "";
    },
    []
  );

  const doGenerate = useCallback(async () => {
    const n = nVal;
    const k = kVal;
    if (k > n) {
      setGenStatus({ msg: "k must be ≤ n", cls: "s-err" });
      return;
    }
    const dctx = getDctx();
    if (!dctx) return;
    setGenStatus({ msg: "Generating…", cls: "s-info" });
    setGenProgress(0);
    const srcData = dctx.getImageData(0, 0, W, H);
    const gray = toGray(srcData.data, W, H);
    const rawShares = await generateShamir(gray, W, H, k, n, (p) => setGenProgress(p));
    setGenProgress(100);
    const ts = Date.now();
    const next = rawShares.map((rs, i) => ({
      id: `sh_${ts}_${i}`,
      label: `Share ${i + 1}`,
      shareObj: rs,
      method: "shamir",
      k,
      n,
    }));
    setShares(next);
    setOverlaid([]);
    setGenProgress(null);
    setGenStatus({ msg: `\u2713 ${n} shares generated (SHAMIR GF(256), k=${k})`, cls: "s-ok" });
  }, [kVal, nVal]);

  const deleteShare = useCallback((id) => {
    setShares((prev) => prev.filter((s) => s.id !== id));
    setOverlaid((prev) => prev.filter((x) => x !== id));
  }, []);

  const addToOverlay = useCallback((id) => {
    setOverlaid((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const removeFromOverlay = useCallback((id) => {
    setOverlaid((prev) => prev.filter((x) => x !== id));
  }, []);

  const clearOverlay = useCallback(() => {
    setOverlaid([]);
    const oc = ocRef.current;
    if (oc) {
      const ctx = oc.getContext("2d");
      ctx.clearRect(0, 0, oc.width, oc.height);
    }
    setRecStatus({ msg: "", cls: "" });
    setEntropy({ pct: 0, note: "No shares overlaid yet", ok: false });
  }, []);

  useEffect(() => {
    const active = overlaid.map((id) => shares.find((s) => s.id === id)).filter(Boolean);
    const oc = ocRef.current;
    if (!active.length) {
      if (oc) {
        oc.style.display = "none";
      }
      setRecStatus({ msg: "", cls: "" });
      setEntropy({ pct: 0, note: "No shares overlaid yet", ok: false });
      return;
    }
    const k = active[0].k;
    const resultID = reconstructShamir(
      active.map((s) => s.shareObj),
      k
    );
    const { w, h } = active[0].shareObj;
    if (oc) {
      oc.width = w;
      oc.height = h;
      oc.style.display = "block";
      oc.style.cssText = `display:block; image-rendering:pixelated; border-radius:4px; border:1.5px solid var(--vss-ink); max-width:200px;`;
      oc.getContext("2d").putImageData(resultID, 0, 0);
    }
    const have = active.length;
    if (have >= k) {
      setRecStatus({ msg: `\u2713 ${have}/${k} shares overlaid — secret reconstructed!`, cls: "s-ok" });
    } else {
      setRecStatus({
        msg: `\u26a0 ${have}/${k} shares — need ${k - have} more (showing noise, no info leaked)`,
        cls: "s-err",
      });
    }
    const d = resultID.data;
    const hist = new Array(256).fill(0);
    for (let i = 0; i < w * h; i++) hist[d[i * 4]]++;
    let E = 0;
    const total = w * h;
    hist.forEach((c) => {
      if (c > 0) {
        const p = c / total;
        E -= p * Math.log2(p);
      }
    });
    const pct = Math.min(100, (E / 8) * 100);
    setEntropy({
      pct,
      ok: have >= k,
      note:
        have >= k
          ? `Shannon entropy ${E.toFixed(2)} bits — structured image (secret visible)`
          : `Shannon entropy ${E.toFixed(2)}/8.0 bits — near-uniform noise, no information leaked`,
    });
  }, [overlaid, shares]);

  const onDropZone = useCallback(
    (e) => {
      e.preventDefault();
      setDropOver(false);
      const id = e.dataTransfer.getData("shId");
      if (id) addToOverlay(id);
    },
    [addToOverlay]
  );

  const uploadShares = useCallback((ev) => {
    const files = [...(ev.target.files || [])];
    if (!files.length) return;
    let done = 0;
    const nFiles = files.length;
    files.forEach((f, i) => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = img.width;
        c.height = img.height;
        const ctx = c.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0);
        const id = ctx.getImageData(0, 0, img.width, img.height);
        URL.revokeObjectURL(img.src);
        setShares((prev) => [
          ...prev,
          {
            id: `up_${Date.now()}_${i}`,
            label: `Upload ${i + 1}`,
            shareObj: { imageData: id, w: img.width, h: img.height, x: i + 1 },
            method: "shamir",
            k: 2,
            n: nFiles,
          },
        ]);
        done++;
        if (done === nFiles) {
          setUlStatus({ msg: `\u2713 ${done} share(s) loaded`, cls: "s-ok" });
        }
      };
      img.src = URL.createObjectURL(f);
    });
    ev.target.value = "";
  }, []);

  const dlAll = useCallback(() => {
    shares.forEach((sh) => {
      const c = imageDataToCanvas(sh.shareObj.imageData, sh.shareObj.w, sh.shareObj.h);
      const a = document.createElement("a");
      a.download = `${sh.label.replace(/\s/g, "_")}_of_${sh.n}.png`;
      a.href = c.toDataURL();
      a.click();
    });
  }, [shares]);

  const dlResult = useCallback(() => {
    const oc = ocRef.current;
    if (!oc || oc.style.display === "none") return;
    const a = document.createElement("a");
    a.download = "reconstructed.png";
    a.href = oc.toDataURL();
    a.click();
  }, []);

  const knDisplay = `(${kVal}, ${nVal})`;

  return (
    <div className="visual-secret-root">
      <div className="vss-page">
        <header className="vss-header">
          <p className="eyebrow">Cryptography Assignment · (k,n) Threshold Scheme</p>
          <h1 className="vss-title">
            Visual <em>Secret</em> Sharing
          </h1>
          <p className="tagline">Split a secret image into n shares · Any k shares reconstruct · Fewer than k reveal nothing</p>
        </header>

        <div className="tabs">
          <button type="button" className={`tab ${activeTab === "gen" ? "active" : ""}`} onClick={() => setActiveTab("gen")}>
            ① Generate Shares
          </button>
          <button type="button" className={`tab ${activeTab === "rec" ? "active" : ""}`} onClick={() => setActiveTab("rec")}>
            ② Reconstruct
          </button>
          <button type="button" className={`tab ${activeTab === "theory" ? "active" : ""}`} onClick={() => setActiveTab("theory")}>
            ③ Theory
          </button>
        </div>

        <div id="pane-gen" className={`pane ${activeTab === "gen" ? "active" : ""}`}>
          <div className="two-col">
            <div className="card">
              <div className="card-label">Secret image — draw or upload</div>
              <div className="canvas-frame">
                <canvas
                  ref={dcRef}
                  className="vss-canvas-pixelated"
                  onMouseDown={onMouseDown}
                  onMouseMove={onMouseMove}
                  onMouseUp={endDraw}
                  onMouseLeave={endDraw}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    onMouseDown(e);
                  }}
                  onTouchMove={(e) => {
                    e.preventDefault();
                    onMouseMove(e);
                  }}
                  onTouchEnd={endDraw}
                />
              </div>
              <div className="tool-row">
                <button type="button" className={`tool-btn ${tool === "pen" ? "on" : ""}`} onClick={() => setTool("pen")} title="Pen" aria-label="Pen">
                  {"\u270F"}
                </button>
                <button type="button" className={`tool-btn ${tool === "erase" ? "on" : ""}`} onClick={() => setTool("erase")} title="Erase" aria-label="Erase">
                  {"\u25FB"}
                </button>
                <button type="button" className={`tool-btn ${tool === "fill" ? "on" : ""}`} onClick={() => setTool("fill")} title="Fill" aria-label="Fill">
                  {"\u25A3"}
                </button>
                <span className="tool-sep" aria-hidden />
                <input
                  type="range"
                  min={2}
                  max={24}
                  value={brushSize}
                  onChange={(e) => setBrushSize(+e.target.value)}
                  aria-label="Brush size"
                />
                <button type="button" className="vss-btn btn-outline btn-sm" onClick={clearDraw}>
                  Clear
                </button>
                <button type="button" className="vss-btn btn-outline btn-sm" onClick={drawExample}>
                  Example
                </button>
              </div>
              <label className="upload-box" style={{ marginTop: 14, display: "block" }}>
                <input ref={fileSecretRef} type="file" accept="image/*" onChange={loadImg} />
                <p>{"\u{1F4C2}"} Upload image</p>
              </label>
            </div>

            <div className="card">
              <div className="card-label blue">Scheme configuration</div>
              <div className="kn-big">{knDisplay}</div>
              <div className="kn-sub">threshold k of n shares needed</div>
              <div className="ctrl-row" style={{ marginTop: 16 }}>
                <label className="vss-label">
                  Total shares n
                  <input
                    type="number"
                    min={2}
                    max={16}
                    value={nVal}
                    onChange={(e) => syncKN(+e.target.value, kVal)}
                  />
                </label>
                <label className="vss-label">
                  Threshold k
                  <input
                    type="number"
                    min={2}
                    max={16}
                    value={kVal}
                    onChange={(e) => syncKN(nVal, +e.target.value)}
                  />
                </label>
                <label className="vss-label">
                  Method
                  <select aria-label="Sharing method" disabled value="shamir">
                    <option value="shamir">Shamir GF(256) — exact reconstruction</option>
                  </select>
                </label>
              </div>
              <p className="scheme-blurb">
                Each pixel value split via degree-(k−1) polynomial over GF(256). Any k shares reconstruct exact pixel via Lagrange interpolation. Lossless.
              </p>
              <button type="button" className="vss-btn btn-primary" style={{ marginTop: 14 }} onClick={doGenerate}>
                Generate shares
              </button>
              <div className={`prog ${genProgress == null ? "hidden" : ""}`}>
                <div className="prog-fill" style={{ width: `${genProgress ?? 0}%` }} />
              </div>
              {genStatus.msg && <div className={`status ${genStatus.cls}`}>{genStatus.msg}</div>}
            </div>
          </div>

          {shares.length > 0 && (
            <div className="card" style={{ marginTop: 16 }}>
              <div className="card-label green">Generated shares — each looks like random noise</div>
              <div className="share-grid">
                {shares.map((sh) => (
                  <ShareTile
                    key={sh.id}
                    sh={sh}
                    onPick={addToOverlay}
                    onDelete={deleteShare}
                    showDelete
                    draggingId={draggingId}
                    setDraggingId={setDraggingId}
                  />
                ))}
              </div>
              <div className="ctrl-row">
                <button type="button" className="vss-btn btn-outline btn-sm" onClick={dlAll}>
                  {"\u2B07"} Download all shares
                </button>
                <button type="button" className="vss-btn btn-outline btn-sm" onClick={() => setActiveTab("rec")}>
                  → Go to Reconstruct
                </button>
              </div>
            </div>
          )}
        </div>

        <div id="pane-rec" className={`pane ${activeTab === "rec" ? "active" : ""}`}>
          <div className="two-col">
            <div className="card">
              <div className="card-label">Available shares</div>
              <p className="scheme-blurb" style={{ marginBottom: 8 }}>
                Click a share to add it to the overlay zone →
              </p>
              {!shares.length ? (
                <p className="scheme-blurb">Generate shares first, or upload below.</p>
              ) : (
                <div className="share-grid">
                  {shares.map((sh) => (
                    <ShareTile
                      key={sh.id}
                      sh={sh}
                      onPick={addToOverlay}
                      draggingId={draggingId}
                      setDraggingId={setDraggingId}
                    />
                  ))}
                </div>
              )}
              <hr className="vss-hr" />
              <div className="card-label blue">Upload saved shares</div>
              <label className="upload-box">
                <input ref={fileSharesRef} type="file" accept="image/png,image/*" multiple onChange={uploadShares} />
                <p>{"\u{1F4C2}"} Upload share PNG files (multiple ok)</p>
              </label>
              {ulStatus.msg && <div className={`status ${ulStatus.cls}`}>{ulStatus.msg}</div>}
            </div>

            <div className="card">
              <div className="card-label green">Overlay zone</div>
              <div
                className={`drop-zone ${dropOver ? "over" : ""}`}
                onDragOver={(e) => { e.preventDefault(); setDropOver(true); }}
                onDragLeave={() => setDropOver(false)}
                onDrop={onDropZone}
                role="region"
                aria-label="Drop shares here"
              >
                {overlaid.length === 0 && (
                  <div className="drop-hint" id="dz-hint">
                    <div className="icon" aria-hidden>
                      {"\u2B07"}
                    </div>
                    <p>Drag or click shares to add</p>
                  </div>
                )}
                <canvas ref={ocRef} className="oc-preview" style={{ display: "none" }} />
              </div>
              <p className="scheme-blurb" style={{ marginTop: 8 }}>
                Result = Shamir reconstruction from overlaid shares (Lagrange in GF(256))
              </p>
              {recStatus.msg && <div className={`status ${recStatus.cls}`}>{recStatus.msg}</div>}
              <div className="entropy-wrap">
                <div className="entropy-label">Pixel entropy of overlay</div>
                <div className="entropy-bar">
                  <div
                    className="entropy-fill"
                    style={{
                      width: `${entropy.pct}%`,
                      background: entropy.ok ? "var(--vss-green)" : "var(--vss-accent)",
                    }}
                  />
                </div>
                <div className="entropy-note">{entropy.note}</div>
              </div>
              <div className="chip-row" style={{ marginTop: 10 }}>
                {overlaid.map((id) => {
                  const s = shares.find((x) => x.id === id);
                  if (!s) return null;
                  return (
                    <span key={id} className="chip">
                      {s.label}
                      <button type="button" onClick={() => removeFromOverlay(id)} aria-label={`Remove ${s.label}`}>
                        ×
                      </button>
                    </span>
                  );
                })}
              </div>
              <div className="ctrl-row">
                <button type="button" className="vss-btn btn-danger btn-sm" onClick={clearOverlay}>
                  {"\u2715"} Clear overlay
                </button>
                <button type="button" className="vss-btn btn-outline btn-sm" onClick={dlResult}>
                  {"\u2B07"} Download result
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="pane-theory" className={`pane ${activeTab === "theory" ? "active" : ""}`}>
          <div className="card">
            <div className="card-label">Shamir over GF(256)</div>
            <div className="theory-grid">
              <div className="mono-block">
                <h4>Share generation (per pixel value s)</h4>
                f(x) = s + a<sub>1</sub>x + … + a<sub>k−1</sub>x<sup>k−1</sup>
                <br />
                a<sub>i</sub> ∈ GF(256) chosen uniformly at random
                <br />
                share<sub>i</sub> = (i, f(i)) for i = 1..n
              </div>
              <div className="mono-block">
                <h4>Reconstruction (Lagrange interpolation)</h4>
                s = Σ<sub>i</sub> y<sub>i</sub> · Π<sub>j≠i</sub> x<sub>j</sub>/(x<sub>j</sub>{"\u2295"}x<sub>i</sub>)
                <br />
                all arithmetic in GF(2<sup>8</sup>)
                <br />
                irreducible poly: x<sup>8</sup>+x<sup>4</sup>+x<sup>3</sup>+x+1
              </div>
            </div>
            <hr className="vss-hr" />
            <div className="card-label green">Security properties</div>
            <div className="theory-grid">
              <div className="mono-block">
                <h4>Perfect secrecy</h4>
                k−1 shares are statistically independent of the secret (Shannon entropy proof). No polynomial-time adversary can do better than guessing.
              </div>
              <div className="mono-block">
                <h4>Threshold reconstruction</h4>
                Any k shares reconstruct. Any k−1 shares are uniformly random — exactly as secure as a one-time pad.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
