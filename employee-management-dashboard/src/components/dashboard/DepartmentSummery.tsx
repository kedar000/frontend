type DepartmentSummaryProps = {
  departments: Record<string, number>;
};

function DepartmentSummary({ departments }: DepartmentSummaryProps) {
  return (
    <>
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="pb-2">Employees by Department</h3>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Department</th>
                <th>Employees</th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(departments).map(([department, count]) => (
                <tr key={department}>
                  <td>{department}</td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DepartmentSummary;
