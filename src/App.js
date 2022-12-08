import React from "react";
import "./App.css";
import Welcome from "./Component/Welcome";
import Greet from "./Component/Greet";
import Hello from "./Component/Hello";
import Title from "./Component/Title";
import Myname from "./Component/MyName";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="FrontEnd Developer Kimaiyo" />
      <Title name="Mobile  Developer Kimaiyo" />
      <Title name="Solidity Developer Kimaiyo" />
      <Myname/>
    </div>
  );
}

export default App;
