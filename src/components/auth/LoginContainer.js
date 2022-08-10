import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export default function LoginContainer() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}
