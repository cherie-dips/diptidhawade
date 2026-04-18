import { Link } from "react-router-dom";
import { blogPosts } from "../blog/posts";
import { assetUrl } from "../utils/assetUrl.js";
import "../styles/blog.css";

export default function BlogIndex() {
  return (
    <div className="blog-page page-content">
      <header className="blog-index-header">
        <h1 className="blog-index-title">Blogs</h1>
      </header>
      <div className="blog-index-inner">
        <ol className="blog-index-list">
          {blogPosts.map((post) => (
            <li key={post.slug} className="blog-index-item">
              <Link to={`/blog/${post.slug}`} className="blog-index-row">
                {post.thumbnail ? (
                  <div className="blog-index-thumb-wrap">
                    <img
                      src={assetUrl(post.thumbnail.replace(/^\//, ""))}
                      alt=""
                      className="blog-index-thumb"
                    />
                  </div>
                ) : null}
                <div className="blog-index-body">
                  <span className="blog-index-link">{post.title}</span>
                  <time className="blog-index-date" dateTime={post.dateIso}>
                    {post.dateLabel}
                  </time>
                  <p className="blog-index-summary">{post.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
