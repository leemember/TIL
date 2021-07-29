import { useState } from "react";

export default function Wellcome() {
  const [name, setName] = useState("Mike");

  return (
    <>
      <h1>state</h1>
      <h2 id="name">{name} 속성값</h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </>
  );
}
