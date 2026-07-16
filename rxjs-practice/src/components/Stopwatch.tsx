import { useState } from "react";
import { interval, Subscription, takeUntil } from "rxjs";
import { stop$ } from "../services/rxjs/timer.service";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const start = () => {
    if (subscription) return;

    const sub = interval(1000)
      .pipe(takeUntil(stop$))
      .subscribe(() => {
        setSeconds((prev) => prev + 1);
      });

    setSubscription(sub);
  };

  const pause = () => {
    stop$.next();
    setSubscription(null);
  };

  const reset = () => {
    pause();
    setSeconds(0);
  };

  return (
    <div>
      <h1>{seconds}</h1>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;