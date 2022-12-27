import React from "react";
import "./App.css";

import ClickMe from "./useState/ClickMe";
import FavoriteColor1 from "./useState/FavoriteColor1";
import FavoriteColor2 from "./useState/FavoriteColor2";
import FavoriteColor3 from "./useState/FavoriteColor3";
import Car from "./useState/Car";
import UpdateCar from "./useState/UpdateCar";
import MyForm1 from "./React Forms/MyForm1";
import MyForm2 from "./React Forms/MyForm2";
function App() {
  return (
    <div className="App">
      <ClickMe />
      <FavoriteColor1 />
      <FavoriteColor2/>
      <FavoriteColor3/>
      <Car/>
      <UpdateCar/>
      <MyForm1/>
      <MyForm2/>
    </div>
  );
}

export default App;
