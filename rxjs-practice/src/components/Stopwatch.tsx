import { useRef, useState } from "react";
import { interval, Subscription, takeUntil } from "rxjs";
import { stop$ } from "../services/rxjs/timer.service";
import { eventLog$ } from "../services/rxjs/event.service";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  const subscriptionRef = useRef<Subscription | null>(null);

  const start = () => {
    if (subscriptionRef.current) return;

    subscriptionRef.current = interval(1000)
      .pipe(takeUntil(stop$))
      .subscribe(() => {
        setSeconds((prev) => prev + 1);
      });

    eventLog$.next("Stopwatch Started");
  };

  const pause = () => {
    stop$.next();
    subscriptionRef.current = null;
    eventLog$.next("Stopwatch Paused");
  };

  const reset = () => {
    pause();
    setSeconds(0);
    eventLog$.next("Stopwatch Reset");
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-danger text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Stopwatch</h5>

      </div>

      <div className="card-body text-center d-flex flex-column justify-content-center">
        

        <h1
          className="display-2 fw-bold text-danger mb-4"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {seconds}s
        </h1>

        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-success"
            onClick={start}
          >
             Start
          </button>

          <button
            className="btn btn-warning"
            onClick={pause}
          >
            Pause
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Stopwatch;