import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Hello from Dashboard</h1>

      <Link to="/logout">Logout</Link>
    </div>
  );
}
