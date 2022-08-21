import { Route, BrowserRouter as Router } from "react-router-dom";

import LoginContainer from "./components/auth/LoginContainer";
import DefaultContainer from "./components/auth/DefaultContainer";
import { StandardUser } from "./components/helpers/userRoles";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route path="/" component={LoginContainer} />

        <StandardUser withRedirect>
          <Route path="*" component={NavBar} />
          <Route component={DefaultContainer} />
        </StandardUser>
      </Router>
    </div>
  );
}

export default App;
