import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { UserContext } from "../UserProvider";
import Dashboard from "../pages/Dashboard";
import BoxShadow from "../pages/BoxShadow";
import CoinFlip from "../pages/CoinFlip";
import DiceRoll from "../pages/DiceRoll";
import Weather from "../pages/Weather";
import SwapiPage from "../pages/SwapiPage";
import About from "../pages/About";
import NoMatch from "../pages/NoMatch";

function Logout() {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div className="logging-out">
      <h1>...Logging Out</h1>
    </div>
  );
}

export default function DefaultContainer() {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/logout" component={Logout} />
      <Route path="/boxshadow" component={BoxShadow} />
      <Route path="/coin-flip" component={CoinFlip} />
      <Route path="/dice-roll" component={DiceRoll} />
      <Route path="/weather" component={Weather} />
      <Route path="/swapi" component={SwapiPage} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  );
}
