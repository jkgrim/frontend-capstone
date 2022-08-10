import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../UserProvider";

export default function LoginPage(props) {
  const history = useHistory();
  const { setUser, authIsLoading, setAuthIsLoading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setAuthIsLoading(true);
    setErrorMsg("");

    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged In") {
          setUser(data.user);
          history.push("/dashboard");
          setAuthIsLoading(false);
        }
      })
      .catch((err) => {
        setAuthIsLoading(false);
        setErrorMsg("Invalid Credentials");
        console.error("Login Error: ", err);
      });
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          {!authIsLoading ? <input type="submit" /> : <h1>...Submitting</h1>}
        </div>
        {errorMsg}
      </form>
    </div>
  );
}
