import apiClient from "../api/axios";
import { API } from "../constants/api";
import type { Employee } from "../types/employee.types";

class EmployeeService{

    async getEmployees():Promise<Employee[]>{
        const response = await apiClient.get<Employee[]>(API.EMPLOYEES.GET_ALL)
        console.log(response.data)
        return response.data;
    }

    async getEmployee(id:number){
        const response = await apiClient.get(API.EMPLOYEES.GET_BY_ID(id))

        return response.data;
    }

    async searchEmployees(query:string):Promise<Employee[]>{
        const reponse = await apiClient.get<Employee[]>(API.EMPLOYEES.SEARCH(query))
        
        return reponse.data
    }
}    

export default new EmployeeService