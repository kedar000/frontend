import { useState, useEffect } from "react";
import { currentUser$, type User } from "../services/rxjs/auth.service";
import { tap } from "rxjs";

function UserInfo() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscription = currentUser$
      .pipe(
        tap((value) =>
          console.log(`from User section : ${JSON.stringify(value)}`)
        )
      )
      .subscribe(setUser);

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Current User</h5>

      </div>

      <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
        <div
          className="  text-white d-flex justify-content-center align-items-center mb-3"
        >
          {user?.name ? user.name.charAt(0).toUpperCase() : "Guest"}
        </div>

        <h4 className="mb-1">
          {user?.name ?? "Guest"}
        </h4>

        <p className="text-muted mb-0">
          {user ? "User Logged In" : "No Active Session"}
        </p>
      </div>

    </div>
  );
}

export default UserInfo;