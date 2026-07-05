import { useMemo, useState } from "react";

export default function UseMemoModule() {
  const [count, setCount] = useState(0);

  const number = 10;

  const result = useMemo(() => {
    console.log("Calculating");

    return number * 100;
  }, [number]);

  console.log(`Rendering....`);
  

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>

      <h2>{result}</h2>
    </>
  );
}
