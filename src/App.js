import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoginContainer from "./components/auth/LoginContainer";
import DefaultContainer from "./components/auth/DefaultContainer";
import { StandardUser } from "./components/helpers/userRoles";
import NavBar from "./components/navigation/NavBar";
import Dashboard from "./components/pages/Dashboard";
import BoxShadow from "./components/pages/BoxShadow";
import CoinFlip from "./components/pages/CoinFlip";
import DiceRoll from "./components/pages/DiceRoll";
import Weather from "./components/pages/Weather";
import SwapiPage from "./components/pages/SwapiPage";
import About from "./components/pages/About";

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
          <Route path="/coin-flip" component={CoinFlip} />
          <Route path="/dice-roll" component={DiceRoll} />
          <Route path="/weather" component={Weather} />
          <Route path="/swapi" component={SwapiPage} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
