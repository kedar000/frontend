
export interface Address {
  type: string;
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  image: string;
  company: {
    department: string;
    title: string;
  };
  contacts: string[];
  addresses: Address[];
}

export interface EmployeeResponse {
  users: Employee[];
  skip: number;
  limit: number;
  total: number;
}
