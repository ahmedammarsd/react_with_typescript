import { useState } from "react";
import { UserInterface } from "../types/app";

const User = () => {
  const [user, setUser] = useState<null | UserInterface>(null); //useState<UserInterface>({} as UserInterface) Type Assertion
  const [loading, setLoading] = useState<boolean>(false);
  // i Write This Function (deleyTime) To Show  or Test Loading , to show and hide it
  const deleyTime = (fun: () => void) => {
    return new Promise((resolve, reject) => {
      console.log(resolve);
      console.log(reject);
      fun();
    });
  };
  const handleLogin = async () => {
    setLoading(true);
    await deleyTime(() => {
      setTimeout(() => {
        setUser({
          name: "ahmed",
          email: "test@gmail.com",
        });
        setLoading(false);
      }, 4000);
    });
    console.log(loading);
  };
  const handleLogOut = async () => {
    setLoading(true);
    await deleyTime(() => {
      setTimeout(() => {
        setUser(null); // or setUser({} as UserInterface) // Type Assertion
        setLoading(false);
      }, 5000);
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogOut}>logout</button>
      <h3>{loading && "LOADING...."}</h3>
      <h2>User Name is: {user?.name}</h2>
      <h2>User Email is: {user?.email} </h2>
    </div>
  );
};

export default User;
