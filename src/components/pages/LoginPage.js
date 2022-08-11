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
    console.log(errorMsg);
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
          setAuthIsLoading(false);
          history.push("/dashboard");
        } else {
          setAuthIsLoading(false);
          setErrorMsg("Invalid Credentials");
        }
      })
      .catch((err) => {
        setAuthIsLoading(false);
        setErrorMsg("Invalid Credentials");
        console.error("Login Error: ", err);
      });
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h1>Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form-container">
          <div className="email-input">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password-input">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="submit-btn">
            {!authIsLoading ? (
              <input type="submit" />
            ) : (
              <h1 style={{ color: "yellow" }}>...Submitting</h1>
            )}
          </div>
          <div className="error-msg">{errorMsg}</div>
        </form>

        <div className="create-account">
          <a href="https://devpipeline-mock-api.herokuapp.com/register">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
