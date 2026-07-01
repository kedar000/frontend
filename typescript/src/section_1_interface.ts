// ----------------------------------------------------
// Interfaces
// ----------------------------------------------------

// Topics
// - Basic Interface
// - Optional Properties
// - Readonly Properties
// - Function Interface
// - Interface Extension
// - Multiple Inheritance
// - Array Interface
// - Interface vs Type


// ----------------------------------------------------
console.log("Basic Interface");
// ----------------------------------------------------

interface User {

    id: number;

    name: string;

    age: number;

}

const user: User = {

    id: 1,

    name: "Kedar",

    age: 22

};

console.log(user);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Optional Properties

interface Employee {

    id: number;

    name: string;

    salary?: number;

}

const emp1: Employee = {

    id: 1,

    name: "Rahul"

};

const emp2: Employee = {

    id: 2,

    name: "Alex",

    salary: 80000

};

console.log(emp1);

console.log(emp2);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Readonly Properties

interface Student {

    readonly id: number;

    name: string;

}

const student: Student = {

    id: 101,

    name: "Kedar"

};

student.name = "Rahul";

// student.id = 200; ❌

console.log(student);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Function Interface

interface Add {

    (a: number, b: number): number;

}

const add: Add = (a, b) => {

    return a + b;

};

console.log(add(10,20));


// ----------------------------------------------------
console.log("-----------------------------------------");

// Interface Extension

interface Person {

    id: number;

    name: string;

}

interface Developer extends Person {

    language: string;

}

const dev: Developer = {

    id: 1,

    name: "Kedar",

    language: "TypeScript"

};

console.log(dev);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Multiple Interface Inheritance

interface Address {

    city: string;

    country: string;

}

interface EmployeeDetails extends Person, Address {

    company: string;

}

const employee: EmployeeDetails = {

    id: 1,

    name: "John",

    city: "Delhi",

    country: "India",

    company: "Google"

};

console.log(employee);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Interface with Arrays

interface Product {

    id: number;

    title: string;

}

const products: Product[] = [

    {

        id: 1,

        title: "Laptop"

    },

    {

        id: 2,

        title: "Mouse"

    }

];

console.log(products);


// ----------------------------------------------------
console.log("-----------------------------------------");

// React-like Props Example

interface ButtonProps {

    text: string;

    disabled?: boolean;

}

function Button(props: ButtonProps) {

    console.log(props.text);

}

Button({

    text: "Login"

});

Button({

    text: "Register",

    disabled: true

});