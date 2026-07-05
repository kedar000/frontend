import { useRef } from "react";

// export default function UnControlledComponent() {

//     const inputRef = useRef(null);

//     function showValue() {
//         console.log(inputRef.current.value);
//     }

//     return (
//         <>
//             <input ref={inputRef} />

//             <button onClick={showValue}>
//                 Show Value
//             </button>
//         </>
//     );
// }




export default function UncontrolledInput() {
  const inputRef = useRef(null);

  console.log("Component Rendered");

  function handleSubmit() {
    console.log("Input Value:", inputRef.current.value);
  }

  return (
    <div>
      <h2>Uncontrolled Input</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your name"
      />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}