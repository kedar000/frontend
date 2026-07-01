"use strict";
// ----------------------------------------------------
// 1. TypeScript Basics
// ----------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
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
let name = "Kedar";
console.log(name);
// number
let age = 22;
console.log(age);
// boolean
let isLoggedIn = true;
console.log(isLoggedIn);
// null
let data = null;
console.log(data);
// undefined
let salary = undefined;
console.log(salary);
// bigint
let population = 12345678901234567890n;
console.log(population);
// symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2);
// any
let value = "Hello";
console.log(value);
value = 100;
console.log(value);
value = true;
console.log(value);
// unknown
let input = "TypeScript";
console.log(input);
// void
function greet() {
    console.log("Hello");
}
greet();
// never
function throwError() {
    throw new Error("Something went wrong");
}
// throwError();
// object
const user = {
    name: "Kedar",
    age: 22
};
console.log(user);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Arrays
const numbers = [10, 20, 30];
console.log(numbers);
const fruits = [
    "Apple",
    "Banana",
    "Mango"
];
console.log(fruits);
// Generic Syntax
const scores = [90, 95, 100];
console.log(scores);
// Multi-Type Arrays (Union)
const mixed = [
    "Kedar",
    22,
    "React",
    100
];
console.log(mixed);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Readonly Arrays
const colors = [
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
const employee = [
    1,
    "Kedar"
];
console.log(employee);
// ----------------------------------------------------
console.log("-----------------------------------------");
// Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.USER);
console.log(Role.GUEST);
// String Enum
var Status;
(function (Status) {
    Status["SUCCESS"] = "SUCCESS";
    Status["FAILED"] = "FAILED";
})(Status || (Status = {}));
console.log(Status.SUCCESS);
// ----------------------------------------------------
console.log("-----------------------------------------");
const student = {
    id: 1,
    name: "Kedar",
    age: 22
};
console.log(student);
// ----------------------------------------------------
console.log("-----------------------------------------");
const laptop = {
    id: 101,
    name: "Dell",
    price: 80000
};
console.log(laptop);
// ----------------------------------------------------
console.log("-----------------------------------------");
const car1 = {
    brand: "BMW",
    model: "X5"
};
const car2 = {
    brand: "Audi",
    model: "A6",
    color: "Black"
};
console.log(car1);
console.log(car2);
//# sourceMappingURL=section_1.js.map