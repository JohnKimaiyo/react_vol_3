import React from "react";
import "./App.css";

import ClickMe from "./useState/ClickMe";
import FavoriteColor1 from "./useState/FavoriteColor1";
import FavoriteColor2 from "./useState/FavoriteColor2";
function App() {
  return (
    <div className="App">
      <ClickMe />
      <FavoriteColor1 />
      <FavoriteColor2/>
    </div>
  );
}

export default App;
