import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import ReactDom from "react-dom";

export default function UpdateCar() {
  const [car, setCar] = useState({
    brand: "ford",
    model: "mustand",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <div>
      <h1>{car.brand}</h1>
      <p>
        it is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </div>
  );
}
