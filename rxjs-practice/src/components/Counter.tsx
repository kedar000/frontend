import { useEffect, useState } from "react";
import { interval, take } from "rxjs";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter$ = interval(1000).pipe(
        take(10)
    );

    const subscription = counter$.subscribe({
      next: (value) => {
        console.log("Next:", value);
        setCount(value);
      },
      error: (err) => {
        console.log("Error:", err);
      },
      complete: () => {
        console.log("Completed");
      },
    });

    return () => {
      subscription.unsubscribe();
      console.log("Unsubscribed");
    };
  }, []);

  return (
    <div>
      <h2>Counter</h2>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;