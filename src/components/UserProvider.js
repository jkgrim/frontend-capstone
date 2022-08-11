import { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
export const UserContext = createContext();

export default function UserProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [authIsLoading, setAuthIsLoading] = useState(true);

  function logout() {
    setAuthIsLoading(true);

    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged out") {
          setUser(null);
          history.push("/login");
        }
        setAuthIsLoading(false);
      })
      .catch((err) => {
        console.error("Logout Error: ", err);
        setAuthIsLoading(false);
      });
  }

  const userState = {
    user,
    setUser,
    authIsLoading,
    setAuthIsLoading,
    logout,
  };

  useEffect(() => {
    setAuthIsLoading(true);
    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/check-login", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user?.role) {
          setUser(data.user);
          history.push("/dashboard");
        } else {
          setUser(null);
        }
        setAuthIsLoading(false);
      })
      .catch((err) => {
        console.error("Check Login Error: ", err);
        setAuthIsLoading(false);
      });
  }, [history]);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
