import { useState } from "react";

import { ReactDOM } from "react";

export default function MyForm3() {
  const [name, setName] = useState("");
  return (
    <form>
      <label>
        Enter your name:
        <input type={name} onChange={(e) => setName(e.target.value)} />
      </label>
    </form>
  );
}
