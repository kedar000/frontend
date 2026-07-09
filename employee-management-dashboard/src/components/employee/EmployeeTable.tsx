import type { Employee } from "../../types/employee.types"

type EmployeeTableProps= {
    employees : Employee[];
    onView : (id : number) =>void
}
export function Employeetable({ employees , onView} : EmployeeTableProps){

    return(
        <div className="table-responsive">
            <table className="table table-hover table-striped align-middle" >
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((emp)=>(
                    <tr key={emp.id} className="justify-content-center align-content-center">
                        <td>
                            {emp.id}
                        </td>
                        <td>{emp.firstName} {emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>{emp.company.department}</td>
                        <td>{emp.company.title}</td>
                        <td className="text-center">{emp.age}</td>
                        <td><button 
                            className="btn btn-sm btn-primary"
                            onClick={()=>onView(emp.id)}>View</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}