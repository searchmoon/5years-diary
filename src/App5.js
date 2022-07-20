import React, { useEffect, useState } from "react";
import App5Main from "./App5Main";
import App5Login from "./App5Login";

const App5 = () => {
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();
  useEffect(() => {
    setUserId(localStorage.getItem("id"));
    setUserPw(localStorage.getItem("password"));
  }, []);

  return <div>{userId && userPw ? <App5Main /> : <App5Login />}</div>;
};

export default App5;
