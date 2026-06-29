// ----------------------------------------------------
// 6. ES6+ Features
// ----------------------------------------------------

// Topics
// - Default Parameters
// - Destructuring
// - Spread Operator (...)
// - Rest Operator (...)
// - Modules (import/export)


// ----------------------------------------------------
console.log("Default Parameters");
// ----------------------------------------------------

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Kedar");

greet();


// ----------------------------------------------------
console.log("-----------------------------------------");

// Array Destructuring

const numbers = [10,20,30,40];

const [first, second] = numbers;

console.log(first);
console.log(second);


// Skip values

const [a, , c] = numbers;

console.log(a);
console.log(c);


// Default Value

const [x,y,z,fourth=100] = [1,2,3];

console.log(fourth);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Object Destructuring

const user = {

    id:1,

    name:"Kedar",

    city:"Delhi"

};

const {name, city} = user;

console.log(name);

console.log(city);


// Rename Variable

const {id:userId} = user;

console.log(userId);


// Default Value

const {country="India"} = user;

console.log(country);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Spread Operator

const arr1 = [1,2,3];

const arr2 = [...arr1];

console.log(arr2);


// Merge Arrays

const arr3 = [...arr1,4,5,6];

console.log(arr3);


// Merge Objects

const obj1 = {

    name:"Kedar"

};

const obj2 = {

    age:22

};

const merged = {

    ...obj1,

    ...obj2

};

console.log(merged);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Rest Operator

function total(...numbers){

    console.log(numbers);

}

total(10,20,30,40);


// Rest with Destructuring

const colors = [

    "Red",

    "Blue",

    "Green",

    "Yellow"

];

const [firstColor,...remainingColors] = colors;

console.log(firstColor);

console.log(remainingColors);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Modules

// utils.js

// export const PI = 3.14;

// export function add(a,b){

//     return a+b;

// }


// app.js

// import {PI,add} from "./utils.js";

// console.log(PI);

// console.log(add(10,20));


// Default Export

// export default function greet(){

// }

// import greet from "./utils.js";


// ----------------------------------------------------
console.log("-----------------------------------------");

// Real React Examples

const state = {

    name:"Kedar",

    age:22

};

const updatedState = {

    ...state,

    age:23

};

console.log(updatedState);


const props = {

    title:"React",

    version:19

};

const {title} = props;

console.log(title);


function Button({

    text="Submit"

}){

    console.log(text);

}

Button({});

Button({text:"Login"});