import { useState } from "react";
import ReactDOM from "react-dom";

export default function FavoriteColor3() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>my {brand}</h1>
      <p>
        it is a {color} {model} from {year}.
      </p>
    </div>
  );
}
