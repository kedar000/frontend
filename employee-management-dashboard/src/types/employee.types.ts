export interface Employee{
    id: number ;
    firstName: string;
    lastName : string;
    email:string;
    phone : string;
    age:number;
    image:string;
    company:{
        department : string;
        title:string;
    }
}

export interface EmployeeResponse{
    users : Employee[];
    skip:number;
    limit:number;
    total:number;

}