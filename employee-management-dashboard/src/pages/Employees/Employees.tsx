import { useEffect, useMemo, useState } from "react";
import type { Employee } from "../../types/employee.types";
import employeeService from "../../services/employee.service";
import { useNavigate } from "react-router-dom";
import { Employeetable } from "../../components/employee/EmployeeTable";

import { useEmployee } from "../../hooks/useEmployees";
import SearchInput from "../../components/common/SearchInput";
import { useDebounce } from "../../hooks/useDebounce";

function Employees() {
  console.log(`employee rendered ....`);

  const { employees, loading, error } = useEmployee();
  const [search, setSearch] = useState("");
  const [displayEmployees, setDisplayEmployees] = useState<Employee[]>([]);

  const debouncedSearch = useDebounce(search , 500);
  const navigate = useNavigate();

  function handleViewEmployee(id: number) {
    navigate(`/dashboard/employees/${id}`);
  }


  useEffect(() => {
    if (employees) {
      setDisplayEmployees(employees);
    }
  }, [employees]);

  // useEffect(() => {
  //   const timer = setTimeout(async () => {
  //     try {
  //       if (search.trim() === "") {
  //         setDisplayEmployees(employees);
  //         return;
  //       }

  //       const response = await employeeService.searchEmployees(search);

  //       setDisplayEmployees(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, 500);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [search, employees]);

  useEffect(()=>{
    async function searchEmployees(){
      try{
        if(debouncedSearch.trim()===""){
          setDisplayEmployees(employees);
          return;
        }
        
        const response = await employeeService.searchEmployees(debouncedSearch)

        setDisplayEmployees(response);
      
      }catch(error){
        console.log(error)
      }
    }
    searchEmployees();
  
  } , [debouncedSearch , employees])

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
