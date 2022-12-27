import { useState } from "react";
import ReactDOM from "react-dom";

export default function FavoriteColor2() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>My favourite color {color}</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </div>
  );
}
