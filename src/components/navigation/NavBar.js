import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <NavLink exact to="/dashboard">
          Dashboard
        </NavLink>
      </div>

      <div>
        <NavLink to="/boxshadow">Box Shadow</NavLink>
      </div>

      <div>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}
