import React from "react";
import { useState } from "react";
export default function MyForm7() {
  const [myCar, setMycar] = useState("volvo");

  const handleChange = (event) => {
    setMycar(event.target.values());
  };

  return (
    <div>
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Form">Ford</option>
          <option value="volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    </div>
  );
}
