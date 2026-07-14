import { useEffect, useState } from "react";
import { eventLog$ } from "../services/rxjs/event.service";

function EventLog() {
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const subscription = eventLog$.subscribe((event) => {
      setEvents((prev) => [...prev, event]);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Event Log</h5>

        
      </div>

      <div className="card-body">
        

        {events.length === 0 ? (
          <div className="text-center text-muted py-5">
            <p className="mb-0">No events recorded yet.</p>
          </div>
        ) : (
          <ul
            className="list-group"
            style={{
              maxHeight: "250px",
              overflowY: "auto",
            }}
          >
            {events.map((event, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{event}</span>

                <span className="badge bg-secondary rounded-pill">
                  #{index + 1}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card-footer text-muted text-center">
        Total Events: {events.length}
      </div>
    </div>
  );
}

export default EventLog;