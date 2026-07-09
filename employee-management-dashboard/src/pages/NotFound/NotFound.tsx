import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  console.log("Notfound rendered");

  useEffect(() => {
    console.log("Not found mounted ");

    return () => {
      console.log("Not found unmounted ");
    };
  }, []);
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1
          className="display-1 fw-bold text-danger"
          style={{ fontSize: "7rem" }}
        >
          404
        </h1>

        <h2 className="fw-semibold mb-3">Page Not Found</h2>

        <p className="text-secondary mb-4">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary btn-lg px-4">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
