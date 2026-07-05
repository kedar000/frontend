import { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");

  function onChangeInput(e){
    console.log(`input value : ${e.target.value}`)
    console.log(`Name : ${name}`)
    setName(e.target.value)
  }
  return (
    <>
      <input
        value={name}
        onChange={(e)=>onChangeInput(e)}
      />

      <h2>{name}</h2>
    </>
  );
}