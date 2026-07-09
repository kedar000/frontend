import { useEffect } from "react";
import authService from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  console.log(`profile rendered.....`);

  const { user } = useAuth();

  if (!user) {
    return <h2> User not found.</h2>;
  }

  useEffect(() => {
    console.log("profile mounted ");

    return () => {
      console.log("profile unmounted ");
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="card shadow">
          <div className="card-header">
            <h3 className="mb-0">My Profile</h3>
          </div>

          <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <th>First Name</th>

                  <td>{user.firstName}</td>
                </tr>

                <tr>
                  <th>Last Name</th>

                  <td>{user.lastName}</td>
                </tr>

                <tr>
                  <th>Email</th>

                  <td>{user.email}</td>
                </tr>

                <tr>
                  <th>Username</th>

                  <td>{user.username}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
