import React from "react";

const App5Main = () => {
  const onClearStorage = () => {
    localStorage.clear();
    window.location.href = "/";
    //window.location.reload();랑 같은 기능으로 동작
  };
  return (
    <div>
      main page
      <button onClick={onClearStorage}>delete pw</button>
    </div>
  );
};

export default App5Main;
