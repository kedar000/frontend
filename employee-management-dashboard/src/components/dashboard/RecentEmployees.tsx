import type { Employee } from "../../types/employee.types";

type RecentEmployeesProps = {
  employees: Employee[];
};

function RecentEmployees({ employees }: RecentEmployeesProps) {
  return (
    <>
      <div className="card shadow-sm">
        <div className="card-body">
          <h2>Recent Employees</h2>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    {employee.firstName} 
                    {/* <br /> */}
                    {/* <small>{employee.company.title}</small> */}
                  </td>

                  <td>{employee.company.title}</td>

                  <td>{employee.company.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default RecentEmployees;
