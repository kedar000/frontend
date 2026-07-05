import React, { useCallback } from "react";
import { useState } from "react";
export default function ProblemuseCallback() {

  const [count, setCount] = useState(0);

//   function handleClick() {
//     console.log("Hello");
//   }

  const handleClick = useCallback(() => {
    console.log("Hello");
  }, []);

//   useCallback
  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

      <Child onClick={handleClick} />
    </>
  );
}
// React

const Child = React.memo(function Child({ onClick }) {
  console.log("Child Render");

  return (
    <button onClick={onClick}>
      Click
    </button>
  );
});