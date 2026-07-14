import { useEffect, useState } from "react";
import { interval, take } from "rxjs";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter$ = interval(1000).pipe(take(10));

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
    <div className="card shadow-sm h-100 border-0">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Counter</h5>

      </div>

      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        

        <h1 className="display-1 fw-bold text-body">
          {count}
        </h1>
      </div>

      <div className="card-footer text-muted text-center">
        Stops automatically after 10 emissions
      </div>
    </div>
  );
}

export default Counter;