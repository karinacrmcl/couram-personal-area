import React from "react";
import { Menu } from "./components/menu";
import HeaderContainer from "./containers/header";
import "./shared/styles/global.scss";

function App() {
  return (
    <>
      <div className="container">
        <HeaderContainer />
      </div>
    </>
  );
}

export default App;
