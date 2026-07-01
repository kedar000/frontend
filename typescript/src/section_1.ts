// ----------------------------------------------------
// 1. TypeScript Basics
// ----------------------------------------------------

// Topics
// - Basic Types
// - Arrays
// - Tuples
// - Enums
// - Interfaces
// - Type Aliases
// - Optional Properties

// ----------------------------------------------------
console.log("Basic Types");
// ----------------------------------------------------

// string

let name: string = "Kedar";

console.log(name);


// number

let age: number = 22;

console.log(age);


// boolean

let isLoggedIn: boolean = true;

console.log(isLoggedIn);


// null

let data: null = null;

console.log(data);


// undefined

let salary: undefined = undefined;

console.log(salary);


// bigint

let population: bigint = 12345678901234567890n;

console.log(population);


// symbol

const id1: symbol = Symbol("id");
const id2: symbol = Symbol("id");

console.log(id1 === id2);


// any

let value: any = "Hello";

console.log(value);

value = 100;

console.log(value);

value = true;

console.log(value);


// unknown

let input: unknown = "TypeScript";

console.log(input);


// void

function greet(): void{

    console.log("Hello");

}

greet();


// never

function throwError(): never{

    throw new Error("Something went wrong");

}

// throwError();


// object

const user: object = {

    name: "Kedar",

    age:22

};

console.log(user);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Arrays

const numbers: number[] = [10,20,30];

console.log(numbers);

const fruits: string[] = [

    "Apple",

    "Banana",

    "Mango"

];

console.log(fruits);


// Generic Syntax

const scores: Array<number> = [90,95,100];

console.log(scores);



// Multi-Type Arrays (Union)

const mixed: (string | number)[] = [

    "Kedar",

    22,

    "React",

    100

];

console.log(mixed);

// ----------------------------------------------------

console.log("-----------------------------------------");

// Readonly Arrays

const colors: readonly string[] = [

    "Red",

    "Blue",

    "Green"

];

console.log(colors);

// colors.push("Black");   

// colors[0] = "White";    


// ----------------------------------------------------
console.log("-----------------------------------------");

// Tuples

const employee: (number | string)[] = [

    1,

    "Kedar"

];

console.log(employee);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Enums

enum Role{

    ADMIN,

    USER,

    GUEST

}

console.log(Role.ADMIN);

console.log(Role.USER);

console.log(Role.GUEST);


// String Enum

enum Status{

    SUCCESS="SUCCESS",

    FAILED="FAILED"

}

console.log(Status.SUCCESS);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Interfaces

interface Student{

    id:number;

    name:string;

    age:number;

}

const student:Student={

    id:1,

    name:"Kedar",

    age:22

};

console.log(student);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Type Alias

type Product={

    id:number;

    name:string;

    price:number;

}

const laptop:Product={

    id:101,

    name:"Dell",

    price:80000

};

console.log(laptop);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Optional Properties

interface Car{

    brand:string;

    model:string;

    color?:string;

}

const car1:Car={

    brand:"BMW",

    model:"X5"

};

const car2:Car={

    brand:"Audi",

    model:"A6",

    color:"Black"

};

console.log(car1);

console.log(car2);


