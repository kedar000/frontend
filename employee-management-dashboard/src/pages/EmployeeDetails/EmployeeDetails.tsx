import { useNavigate, useParams } from "react-router-dom";
// import Employees from "../Employees/Employees";
// import Employees from "../Employees/Employees";
import type { Employee } from "../../types/employee.types";
import { useEffect, useState } from "react";
import employeeService from "../../services/employee.service";
// import EmployeeDetails from './EmployeeDetails';

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getEmployees(id: number) {
    try {
      // if(!id) return new Error;
      setLoading(true);
      const data = await employeeService.getEmployee(Number(id));
      setEmployee(data);
    } catch {
      setError("Unable to fetch the Employee");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getEmployees(Number(id));
  }, [id]);

  if (loading) {
    return <h2> Loading.....</h2>;
  }
  if (error || !employee) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      {/* <h1>
            {employee.firstName} {employee.lastName}
        </h1>

        <p>Email : {employee.email}</p>
        <p>Phone : {employee.phone}</p>
        <p>Department : {employee.company.department}</p>
        <p>Designation : {employee.company.title}</p> */}

      <div className="container">
        <button
          className="btn btn-outline-secondary mb-4"
          onClick={() => navigate("/dashboard/employees")}
        >
          ← Back
        </button>

        <div className="card shadow">
          <div className="card-body">
            <div className="text-center mb-5">
              <h2 className="fw-bold">
                {employee.firstName} {employee.lastName}
              </h2>

              <p className="text-muted">{employee.company.title}</p>
            </div>

            <table className="table">
              <tbody>
                <tr>
                  <th>Email</th>

                  <td>{employee.email}</td>
                </tr>

                <tr>
                  <th>Phone</th>

                  <td>{employee.phone}</td>
                </tr>

                <tr>
                  <th>Department</th>

                  <td>
                    <span className="badge bg-primary p-2">
                      {employee.company.department}
                    </span>
                  </td>
                </tr>

                <tr>
                  <th>Age</th>

                  <td>{employee.age}</td>
                </tr>
              </tbody>
            </table>

            <div className="text-end">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/dashboard/employees")}
              >
                Back to Employees
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetails;
