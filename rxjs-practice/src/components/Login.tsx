import { useEffect, useState } from "react";
import { currentUser$ } from "../services/rxjs/auth.service";
import { tap } from "rxjs";
import { eventLog$ } from "../services/rxjs/event.service";

export default function Login() {
  const [name, setName] = useState("");

  const login = () => {
    if (!name.trim()) return;

    currentUser$.next({
      id: Date.now(),
      name,
    });

    eventLog$.next(`Login : ${name}`);

    setName("");
  };

  useEffect(() => {
    const subscription = currentUser$
      .pipe(
        tap((value) => console.log(value))
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-warning d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-dark">Login</h5>

      </div>

      <div className="card-body">
       

        <div className="mb-3">
          <label className="form-label">Username</label>

          <input
            type="text"
            className="form-control"
            value={name}
            placeholder="Enter username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button
          className="btn btn-warning w-100"
          onClick={login}
          disabled={!name.trim()}
        >
          Login
        </button>
      </div>

      <div className="card-footer text-center text-muted">
        Emits a new user to all subscribers.
      </div>
    </div>
  );
}