import { useEffect, useMemo, useState } from "react";
import type { Employee } from "../../types/employee.types";
import employeeService from "../../services/employee.service";
import { useNavigate } from "react-router-dom";
import { Employeetable } from "../../components/employee/EmployeeTable";

import { useEmployee } from "../../hooks/useEmployees";
import SearchInput from "../../components/common/SearchInput";

function Employees() {
  console.log(`employee rendered ....`);

  const { employees, loading, error } = useEmployee();
  const [search, setSearch] = useState("");
  const [displayEmployees, setDisplayEmployees] = useState<Employee[]>([]);
  const navigate = useNavigate();

  function handleViewEmployee(id: number) {
    navigate(`/dashboard/employees/${id}`);
  }

  // const filteredEmployees = useMemo(() => {
  //   return employees.filter((emp) => {
  //     const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
  //     return (
  //       fullName.includes(search.toLowerCase()) ||
  //       emp.email.toLowerCase().includes(search.toLowerCase()) ||
  //       emp.company.department.toLowerCase().includes(search.toLowerCase())
  //     );
  //   });
  // }, [employees, search]);
  useEffect(() => {
    if (employees) {
      setDisplayEmployees(employees);
    }
  }, [employees]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        if (search.trim() === "") {
          setDisplayEmployees(employees);
          return;
        }

        const response = await employeeService.searchEmployees(search);

        setDisplayEmployees(response);
      } catch (error) {
        console.error(error);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search, employees]);

  if (loading) {
    return <h2>Loading.....</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Employees</h2>

        {/* <button className="btn btn-primary" onClick={handleAddEmployee}>
          Add Employee
        </button> */}
      </div>

      {/* <EmployeeSearch
        value={search}
        onChange={setSearch}
        onClear={() => setSearch("")}
      /> */}

      <SearchInput
            value={search}
            onChange={setSearch}
            onClear={()=>setSearch("")}
            placeholder="Search Employees" />

      <div className="mt-4">
        {displayEmployees.length > 0 ? (
          <Employeetable
            employees={displayEmployees}
            onView={handleViewEmployee}
          />
        ) : (
          <div className="alert alert-warning">No employee found.</div>
        )}
      </div>
    </div>
  );
}

export default Employees;
