/**
 * All blog posts live in this file.
 *
 * To add a post:
 * 1. Append an object to `blogPosts` (keep newest at the top or bottom — order here = order on /blog).
 * 2. Set `slug`, `title`, `dateLabel`, `dateIso`, `summary`.
 * 3. Optionally set `thumbnail` to a path under `public/` (e.g. `/assets/blog/my-post.png`).
 * 4. Define a `function MyPostContent()` above and assign `Content: MyPostContent`.
 */
import VisualSecretDemo from "../components/VisualSecretDemo.jsx";

const VISUAL_SECRET_REPO = "https://github.com/cherie-dips/Visual-Secret";
const VISUAL_SECRET_LIVE = "https://cherie-dips.github.io/Visual-Secret/";

function VisualSecretSharingContent() {
  return (
    <article className="blog-article blog-vss">
      <div className="blog-vss-kicker">
        <span>Cryptography</span> April 2026 · 10 min read
      </div>

      <h1 className="blog-vss-headline">Splitting Secrets, Pixel by Pixel</h1>

      <p className="blog-vss-deck">
        How Shamir&apos;s threshold scheme, run independently on every byte of a grayscale image over GF(2
        <sup>8</sup>), turns one picture into <em>n</em> unintelligible shares and reconstructs it perfectly from any{" "}
        <em>k</em> of them.
      </p>

      <div className="blog-vss-byline">
        <span>Visual Secret Sharing</span>
        <a href={VISUAL_SECRET_REPO} target="_blank" rel="noreferrer">
          github.com/cherie-dips/Visual-Secret ↗
        </a>
      </div>

      <div className="blog-vss-body blog-article-body">
        <p>
          The phrase <em>visual secret sharing</em> conjures a specific image: two printed transparencies, each a fog of
          black-and-white noise, stacked under a lamp and suddenly a hidden picture snaps into view. That 1994 trick by Naor
          and Shamir is delightfully physical. But it requires pixel expansion (each secret pixel blows up into a 2x2 block),
          leaks information about the image&apos;s density, and only ever works for exactly two shares.
        </p>

        <p>
          The algorithm described here keeps the goal —> split an image into shares; recover it from enough of them but swaps the
          construction. The secret is still a picture. The math is Shamir&apos;s (k, n) threshold scheme, applied independently to
          every pixel, with all arithmetic done inside the finite field GF(2<sup>8</sup>).
        </p>

        <h2>Why a finite field?</h2>
        <p>
          Shamir&apos;s original scheme works over any finite field. The classic textbook version picks a large prime <em>p</em>{" "}
          and does arithmetic modulo <em>p</em>. Pixel values are bytes — integers in 0...255. If you try ordinary arithmetic
          modulo some prime p, the polynomial evaluations can exceed 255, so you cannot store them as bytes and cannot reconstruct
          the original value without extra bookkeeping.
        </p>

        <p>GF(2<sup>8</sup>) is the natural home for bytes. It is a 256-element field in which:</p>

        <div className="blog-vss-math">
          <div>Addition: a {"\u2295"} b (bitwise XOR — no carries, no overflow)</div>
          <div>
            Multiplication: polynomial product mod x<sup>8</sup> + x<sup>4</sup> + x<sup>3</sup> + x + 1
          </div>
        </div>

        <p>
          That irreducible degree-8 polynomial is the same one AES uses. Because every non-zero element of GF(2
          <sup>8</sup>) has a multiplicative inverse, Lagrange interpolation is well-defined. And because every operation on
          bytes produces a byte, a share image is just another grayscale image — same dimensions, same bit depth, same file
          format as the secret.
        </p>

        <div className="blog-vss-callout teal">
          <div className="blog-vss-callout-label">Key insight</div>
          <p>
            GF(2<sup>8</sup>) arithmetic is closed over bytes. Addition never overflows; multiplication never produces a value
            outside 0...255. No clipping, no modular wraparound that would break the threshold property.
          </p>
        </div>

        <h2>The construction, step by step</h2>
        <h3>1 · Prepare the secret</h3>
        <p>
          The input image is converted to grayscale — one byte <code>s</code> per pixel. Colour images lose their colour; that
          is a deliberate simplification that keeps the math clean. The spatial layout (width x height) is preserved in every
          share, so all shares are visually indistinguishable from random noise with the same dimensions as the original.
        </p>

        <h3>2 · Sample a polynomial per pixel</h3>
        <p>
          For each pixel byte <code>s</code>, the algorithms samples <code>k − 1</code> random bytes{" "}
          <code>
            a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>k-1</sub>
          </code>{" "}
          and constructs the polynomial:
        </p>
        <div className="blog-vss-math">
          f(x) = s {"\u2295"} a<sub>1</sub>x {"\u2295"} a<sub>2</sub>x<sup>2</sup> {"\u2295"} ... {"\u2295"} a
          <sub>k-1</sub>x<sup>k-1</sup>
        </div>
        <p>
          All operations here are in GF(2<sup>8</sup>). The constant term is exactly <code>s</code>, which is what we recover.
          The random coefficients are freshly sampled per pixel — the polynomials at adjacent pixels are statistically
          independent.
        </p>

        <h3>3 · Evaluate and distribute</h3>
        <p>
          The polynomial is evaluated at the <em>n</em> non-zero field elements <code>1, 2, ..., n</code>. Share <em>i</em>{" "}
          stores <code>f(i)</code> at this pixel. Repeat for every pixel.
        </p>

        <div className="blog-vss-pixel-demo">
          <div className="blog-vss-pixel-header">worked example · secret pixel = 0xA7 (167), k = 2, n = 3</div>
          <div className="blog-vss-pixel-row">
            <div className="blog-vss-pixel-step">
              <div className="blog-vss-pixel-box secret">0xA7</div>
              <div className="blog-vss-pixel-label">secret pixel</div>
            </div>
            <div className="blog-vss-arrow">→</div>
            <div className="blog-vss-pixel-step">
              <div className="blog-vss-pixel-box poly">f(x)</div>
              <div className="blog-vss-pixel-label">f(x) = 0xA7 {"\u2295"} r·x</div>
            </div>
            <div className="blog-vss-arrow">→</div>
            <div className="blog-vss-pixel-step">
              <div className="blog-vss-pixel-box s1">f(1)</div>
              <div className="blog-vss-pixel-label">share 1</div>
            </div>
            <div className="blog-vss-pixel-step">
              <div className="blog-vss-pixel-box s2">f(2)</div>
              <div className="blog-vss-pixel-label">share 2</div>
            </div>
            <div className="blog-vss-pixel-step">
              <div className="blog-vss-pixel-box s3">f(3)</div>
              <div className="blog-vss-pixel-label">share 3</div>
            </div>
          </div>
          <p className="blog-vss-caption">
            Any 2 of the 3 shares reconstruct 0xA7. Knowing only 1 gives zero information.
          </p>
        </div>

        <h3>4 · Reconstruct via Lagrange interpolation</h3>
        <p>
          Given any <em>k</em> shares at indices{" "}
          <code>
            i<sub>1</sub>, i<sub>2</sub>, ..., i<sub>k</sub>
          </code>{" "}
          — Lagrange interpolation recovers the constant term <code>f(0) = s</code>:
        </p>
        <div className="blog-vss-math">
          s = {"\u2295"}
          <sub>i</sub> y<sub>i</sub> · {"\u220F"}
          <sub>j\u2260i</sub> x<sub>j</sub> / (x<sub>i</sub> {"\u2295"} x<sub>j</sub>)
        </div>
        <p>
          Every division is a field inverse in GF(2<sup>8</sup>), computed via extended Euclidean method or lookup tables. The
          formula runs pixel-by-pixel; recovered bytes are assembled back into an image.
        </p>

        <div className="blog-vss-callout purple">
          <div className="blog-vss-callout-label">Perfect secrecy</div>
          <p>
            With fewer than <em>k</em> shares, the polynomial is underdetermined: for any byte value <em>v</em>, there exists a
            degree (k − 1) polynomial with constant term <em>v</em> that passes through the known points. Every possible secret is
            equally consistent with observed shares.
          </p>
        </div>

        <div className="blog-vss-separator">
          <div className="line" />
          <div className="dot" />
          <div className="line" />
        </div>

        <h2>What the shares look like</h2>
        <p>
          Each share image is visually indistinguishable from uniform random noise. There is no structural resemblance to the
          original. Even the histogram of a share is close to flat because random coefficients are uniform and independent, each
          evaluation <code>f(i)</code> is uniformly distributed over 0...255, independent of the secret value at that pixel.
        </p>

        <p>
          This differs from Naor–Shamir transparencies, where shares carry statistical structure: darker regions of the secret
          correspond to denser patterns. Here, share density carries no information about the original.
        </p>

        <div className="blog-vss-callout coral">
          <div className="blog-vss-callout-label">Comparison with Naor–Shamir</div>
          <p>
            Classic visual cryptography can be eye-decoded but causes pixel expansion and has limited threshold flexibility.
            Shamir-on-GF(2<sup>8</sup>) supports arbitrary (k, n), keeps share size equal to the original, and gives perfect
            per-pixel secrecy — but needs computation for reconstruction.
          </p>
        </div>

        <h2>Arithmetic in GF(2⁸)</h2>
        <p>
          The key non-trivial operation is multiplication. To multiply bytes <code>a</code> and <code>b</code> modulo{" "}
          <code>0x11b</code>, treat bytes as degree-7 polynomials over GF(2), multiply, then reduce modulo{" "}
          <code>
            x<sup>8</sup> + x<sup>4</sup> + x<sup>3</sup> + x + 1
          </code>
          .
        </p>
        <div className="blog-vss-math">
          <div>mul(a, b):</div>
          <div>&nbsp;&nbsp;p = 0</div>
          <div>&nbsp;&nbsp;for i in 0..7:</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;if b &amp; 1: p {"\u2295"}= a</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;hi = a &amp; 0x80</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;a = (a &lt;&lt; 1) &amp; 0xFF</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;if hi: a {"\u2295"}= 0x1B</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;b &gt;&gt;= 1</div>
          <div>&nbsp;&nbsp;return p</div>
        </div>

        <p>
          Inversion for Lagrange can use Fermat&apos;s little theorem: <code>a^(-1) = a^254</code> in GF(2<sup>8</sup>), since the
          field has 255 non-zero elements.
        </p>

        <h2>Security considerations and real-world use</h2>
        <p>
          The threshold property is information-theoretic, not computational. An adversary with unlimited computing power and{" "}
          <code>k − 1</code> shares learns nothing about the secret image.
        </p>
        <p>
          Practical caveats still apply: once an attacker obtains <code>k</code> valid shares, secrecy is broken. Also, base
          Shamir does not provide tamper detection, so authenticity should be layered with MACs/signatures if required.
        </p>

        <div className="blog-vss-callout amber">
          <div className="blog-vss-callout-label">Practical note</div>
          <p>
            Choose parameters freely as long as <code>k ≤ n ≤ 255</code>. GF(2<sup>8</sup>) has exactly 255 non-zero elements, so
            evaluation points 1..n must be distinct.
          </p>
        </div>

        <h2>Reading the code</h2>
        <p>
          The repository separates concerns into GF arithmetic, Shamir logic, and image processing. That split keeps the math testable
          independently from I/O and UI.
        </p>
        <p>
          If you experiment, vary <em>k</em>. Lower thresholds ease recovery but increase single-holder risk; higher thresholds do the
          opposite. The core secrecy story remains the same.
        </p>
      </div>

      <section className="blog-demo-section" aria-labelledby="demo-heading">
        <h2 id="demo-heading" className="blog-demo-heading">
          Interactive demo
        </h2>
        <p className="blog-article-body blog-demo-intro">
          Draw or upload a secret, pick <code>(k, n)</code>, generate noisy shares, then combine shares in the overlay zone to
          reconstruct.
        </p>
        <div className="blog-demo-widget-wrap">
          <VisualSecretDemo />
        </div>
      </section>
    </article>
  );
}

export const blogPosts = [
  {
    slug: "visual-secret-sharing",
    title: "Visual secret sharing for images (Shamir on GF(256))",
    dateLabel: "April 2026",
    dateIso: "2026-04-01",
    summary:
      "Shamir (k, n) threshold sharing per pixel in GF(256), with a demo.",
    thumbnail: "/assets/blog/Visual-Secret.png",
    Content: VisualSecretSharingContent,
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
