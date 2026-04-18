/** GF(256) + per-pixel Shamir (k, n) — same math as Visual-Secret repo */

const GF = (() => {
  const MOD = 0x11b;
  const mul = (a, b) => {
    let p = 0;
    let aa = a;
    let bb = b;
    for (let i = 0; i < 8; i++) {
      if (bb & 1) p ^= aa;
      const hb = aa & 0x80;
      aa = (aa << 1) & 0xff;
      if (hb) aa ^= MOD & 0xff;
      bb >>= 1;
    }
    return p;
  };
  const pow = (a, e) => {
    let r = 1;
    for (let i = 0; i < e; i++) r = mul(r, a);
    return r;
  };
  const inv = (a) => pow(a, 254);
  const div = (a, b) => mul(a, inv(b));
  return { mul, inv, div };
})();

export function shamirSplit(secret, k, n) {
  const c = [secret & 0xff];
  for (let i = 1; i < k; i++) c.push(Math.floor(Math.random() * 256));
  return Array.from({ length: n }, (_, xi) => {
    const x = xi + 1;
    let y = 0;
    for (let i = c.length - 1; i >= 0; i--) y = GF.mul(y, x) ^ c[i];
    return { x, y };
  });
}

export function shamirReconstruct(pts) {
  let s = 0;
  for (let i = 0; i < pts.length; i++) {
    let num = 1;
    let den = 1;
    for (let j = 0; j < pts.length; j++) {
      if (i === j) continue;
      num = GF.mul(num, pts[j].x);
      den = GF.mul(den, pts[j].x ^ pts[i].x);
    }
    s ^= GF.mul(pts[i].y, GF.div(num, den));
  }
  return s & 0xff;
}

export const tick = () => new Promise((r) => setTimeout(r, 0));

export async function generateShamir(gray, srcW, srcH, k, n, onProgress) {
  const total = srcW * srcH;
  const shareArrays = Array.from({ length: n }, () => new Uint8ClampedArray(total * 4));
  for (let i = 0; i < total; i++) {
    if (i % (srcW * 10) === 0) {
      onProgress?.((i / total) * 85);
      await tick();
    }
    const pts = shamirSplit(gray[i], k, n);
    for (let s = 0; s < n; s++) {
      const v = pts[s].y;
      const o = i * 4;
      shareArrays[s][o] = shareArrays[s][o + 1] = shareArrays[s][o + 2] = v;
      shareArrays[s][o + 3] = 255;
    }
  }
  return shareArrays.map((arr, i) => ({
    imageData: new ImageData(arr, srcW, srcH),
    w: srcW,
    h: srcH,
    x: i + 1,
  }));
}

export function reconstructShamir(shareObjs, k) {
  if (shareObjs.length < k) {
    const { w, h } = shareObjs[0];
    const noise = new Uint8ClampedArray(w * h * 4);
    for (let i = 0; i < w * h; i++) {
      const v = Math.floor(Math.random() * 256);
      const o = i * 4;
      noise[o] = noise[o + 1] = noise[o + 2] = v;
      noise[o + 3] = 255;
    }
    return new ImageData(noise, w, h);
  }
  const { w, h } = shareObjs[0];
  const out = new Uint8ClampedArray(w * h * 4);
  const datas = shareObjs.map((s) => s.imageData.data);
  const use = shareObjs.slice(0, k);
  const useDatas = datas.slice(0, k);
  for (let p = 0; p < w * h; p++) {
    const pts = use.map((s, si) => ({ x: s.x, y: useDatas[si][p * 4] }));
    const v = shamirReconstruct(pts);
    const o = p * 4;
    out[o] = out[o + 1] = out[o + 2] = v;
    out[o + 3] = 255;
  }
  return new ImageData(out, w, h);
}

export function toGray(rgba, w, h) {
  const out = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const o = i * 4;
    out[i] = Math.round(0.299 * rgba[o] + 0.587 * rgba[o + 1] + 0.114 * rgba[o + 2]);
  }
  return out;
}

export function imageDataToCanvas(imageData, w, h) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  c.getContext("2d").putImageData(imageData, 0, 0);
  return c;
}
