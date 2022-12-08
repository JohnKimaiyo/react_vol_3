import React from "react";
import { useState } from "react";
function Myname() {
  const [name, setName] = useState("john");
  const changeName = () => {
    setName("kimaiyo");
  };
  return (
    <div>
      <p>My Name is {name}</p>
      <button onClick={changeName}>Click me</button>
    </div>
  );
}
export default Myname;
