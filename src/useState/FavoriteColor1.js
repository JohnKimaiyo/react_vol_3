import { useState } from "react";
import { ReactDOM } from "react";

export default function FavoriteColor1() {
  const [color, setColor] = useState("red");

  return <h1>My fovourite color is {color}!</h1>;
}
