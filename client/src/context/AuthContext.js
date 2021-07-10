import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedin] = useState(undefined);
  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
    setLoggedin(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
