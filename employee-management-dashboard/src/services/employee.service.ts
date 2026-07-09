import apiClient from "../api/axios";
import type { EmployeeResponse } from "../types/employee.types";

class EmployeeService{

    async getEmployees():Promise<EmployeeResponse >{
        const response = await apiClient.get<EmployeeResponse>("/users")

        return response.data;
    }

    async getEmployee(id:number){
        const response = await apiClient.get(`/users/${id}`)

        return response.data;
    }
}    

export default new EmployeeService