import { useState } from "react";
import ReactDOM from "react-dom";

export default function MyForm2() {
  const [name, setName] = useState("");
  return (
    <form>
      <labe>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </labe>
    </form>
  );
}
