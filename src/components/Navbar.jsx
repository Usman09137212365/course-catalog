import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  // NavLink passes { isActive } so the current page can be highlighted
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          Course<span>Catalog</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/category/Beginner" className={linkClass}>
            Beginner
          </NavLink>
          <NavLink to="/category/Intermediate" className={linkClass}>
            Intermediate
          </NavLink>
        </nav>
      </div>
    </header>
  );
}