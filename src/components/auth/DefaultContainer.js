import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { UserContext } from "../UserProvider";
import Dashboard from "../pages/Dashboard";

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
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
}
