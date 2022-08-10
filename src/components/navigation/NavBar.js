import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-item">
        <NavLink exact to="/dashboard">
          Dashboard
        </NavLink>
      </div>

      <div className="nav-item">
        <NavLink to="/boxshadow">Box Shadow</NavLink>
      </div>

      <div className="nav-item">
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="nav-item">
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}
