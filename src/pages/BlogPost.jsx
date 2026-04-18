import { Link, Navigate, useParams } from "react-router-dom";
import { getBlogPostBySlug } from "../blog/posts";
import "../styles/blog.css";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const { Content } = post;

  return (
    <div className="blog-page page-content">
      <nav className="blog-top-nav" aria-label="Blog navigation">
        <Link to="/blog" className="blog-back">
          ← All posts
        </Link>
      </nav>
      <Content />
    </div>
  );
}
