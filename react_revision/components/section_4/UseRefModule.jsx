import { useRef, useState } from "react";

export default function UseRefModule() {
  const countRef = useRef(0);
  const [count , setCount] = useState(0)

  function increment() {
    countRef.current++;

    console.log(countRef.current);
  }

  function incr(){
    console.log("Button clicked ")
    setCount((prev)=> prev+1)
  }

  console.log(`Render.....`)
  return (
    <>
      <button onClick={increment}>Increment</button>

      <h5>-----------------------------</h5>
      <h1>{count}</h1>
      <button onClick={incr}> increase </button>
    </>
  );
}
