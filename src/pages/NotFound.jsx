import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="message-box">
      <p className="big-code">404</p>
      <h1>Page not found</h1>
      <p className="intro">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">
        ← Go home
      </Link>
    </section>
  );
}