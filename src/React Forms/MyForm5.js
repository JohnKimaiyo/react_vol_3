import { useState } from "react";
import React from "react";

export default function MyForm5() {
  const [textarea, setTextarea] = useState(
    "the content of a text area goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  );
}
