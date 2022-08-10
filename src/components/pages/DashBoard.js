import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="component-wrapper">
          <div className="preview-img">
            <img src="" alt="" />
          </div>

          <Link to="/boxshadow">Box Shadow</Link>
        </div>

        <div className="component-wrapper">
          <div className="preview-img">
            <img src="" alt="" />
          </div>

          <Link to="/boxshadow">Box Shadow</Link>
        </div>

        <div className="component-wrapper">
          <div className="preview-img">
            <img src="" alt="" />
          </div>

          <Link to="/boxshadow">Box Shadow</Link>
        </div>

        <div className="component-wrapper">
          <div className="preview-img">
            <img src="" alt="" />
          </div>

          <Link to="/boxshadow">Box Shadow</Link>
        </div>

        <div className="component-wrapper">
          <div className="preview-img">
            <img src="" alt="" />
          </div>

          <Link to="/boxshadow">Box Shadow</Link>
        </div>
      </div>
    </div>
  );
}
