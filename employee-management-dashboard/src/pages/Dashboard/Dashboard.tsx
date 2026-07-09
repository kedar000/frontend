import { useMemo } from "react";
import StatCard from "../../components/dashboard/StatCard";
import authService from "../../services/auth.service";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import DepartmentSummary from "../../components/dashboard/DepartmentSummery";
import RecentEmployees from "../../components/dashboard/RecentEmployees";
import { useEmployee } from "../../hooks/useEmployees";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  console.log("dashboard rendered....");

  const { employees, loading, error } = useEmployee();
  const { user } = useAuth();

  const {
    totalEmployees,
    totalDepartments,
    averageAge,
    departmentSummary,
    recentEmployees,
  } = useMemo(() => {
    const summary: Record<string, number> = {};
    let ageSum = 0;

    for (const employee of employees) {
      ageSum += employee.age;

      const department = employee.company.department;
      summary[department] = (summary[department] || 0) + 1;
    }

    return {
      totalEmployees: employees.length,
      totalDepartments: Object.keys(summary).length,
      averageAge:
        employees.length === 0 ? 0 : Math.round(ageSum / employees.length),
      departmentSummary: summary,
      recentEmployees: employees.slice(0, 5),
    };
  }, [employees]);

  if (loading) return <h2>Loading....</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <div className="container mt-4">
        {user && (
          <WelcomeCard firstName={user.firstName} lastName={user.lastName} />
        )}

        <div className="row mt-4">
          <div className="col-md-4">
            <StatCard title="Employees" value={totalEmployees} />
          </div>

          <div className="col-md-4">
            <StatCard title="Departments" value={totalDepartments} />
          </div>

          <div className="col-md-4">
            <StatCard title="Average Age" value={averageAge} />
          </div>
        </div>

        <div className="row mt-4 ">
          <div className="col-lg-6 ">
            <DepartmentSummary departments={departmentSummary} />
          </div>

          <div className="col-lg-6">
            <RecentEmployees employees={recentEmployees} />
          </div>
        </div>
      </div>
    </>
  );
}
