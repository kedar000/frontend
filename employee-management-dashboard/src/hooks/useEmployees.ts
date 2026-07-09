import { useEffect, useState } from "react";
import type { Employee } from "../types/employee.types";
import employeeService from "../services/employee.service";
// import Loading from '../../../react_revision/components/lazy/Loading';

export function useEmployee(){
    const [employees , setEmployees ] = useState<Employee[]>([]);
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState("")

    //write useeffect
    useEffect(()=>{
        fetchEmployees()
    }, [])

    async function fetchEmployees(){
        try{
            setLoading(true)

            const data = await employeeService.getEmployees();

            setEmployees(data.users)
        }catch{
            setError("Unable to fetch Employees")
        }finally{
            setLoading(false)
        }
    }

    return{
        employees,
        loading,
        error
    }


}