import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoginContainer from "./components/auth/LoginContainer";
import DefaultContainer from "./components/auth/DefaultContainer";
import { StandardUser } from "./components/helpers/userRoles";
import Dashboard from "./components/pages/Dashboard";
import NavBar from "./components/navigation/NavBar";
import BoxShadow from "./components/pages/BoxShadow";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route path="/" component={LoginContainer} />

        <StandardUser withRedirect>
          <Route path="*" component={NavBar} />
          <Route component={DefaultContainer} />
        </StandardUser>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/boxshadow" component={BoxShadow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
