import { useState } from "react";
import React from "react";

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
