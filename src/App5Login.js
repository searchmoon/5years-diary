import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const App5Login = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const onLogIn = () => {
    localStorage.setItem("id", userId);
    localStorage.setItem("password", userPw);
    window.location.href = "/";
  };
  const onIdChange = (e) => {
    setUserId(e.target.value);
  };
  const onPwChange = (e) => {
    setUserPw(e.target.value);
  };
  return (
    <Div>
      <h2>로그인</h2>
      <input placeholder="id" onChange={onIdChange}></input>
      <input placeholder="password" onChange={onPwChange}></input>
      <button onClick={onLogIn}>로그인</button>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  max-width: 500px;
  margin: 0 auto;
`;
export default App5Login;
