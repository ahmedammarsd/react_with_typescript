import { useState } from "react";

const Loggedin = () => {
  const [isLoggedIn, setIsloggedIn] = useState<boolean>(false);
  const handleLogin = () => {
    setIsloggedIn(true);
  };
  const handleLogOut = () => {
    setIsloggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogOut}>logout</button>
      <h2>User is {isLoggedIn ? " Logged in" : " not Logged"}</h2>
    </div>
  );
};

export default Loggedin;
