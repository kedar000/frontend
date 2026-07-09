import { useEffect } from "react";

export default function Settings() {
  console.log(`setting rendered....`);

  useEffect(() => {
    console.log("settings mounted ");

    return () => {
      console.log("setting unmounted");
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="card shadow">
          <div className="card-header">
            <h3 className="mb-0">Settings</h3>
          </div>

          <div className="card-body">
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" />

              <label className="form-check-label">Email Notifications</label>
            </div>

            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked
              />

              <label className="form-check-label">Dark Mode</label>
            </div>

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" />

              <label className="form-check-label">
                Two Factor Authentication
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
