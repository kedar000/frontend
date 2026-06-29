// ----------------------------------------------------
// 2. Functions
// ----------------------------------------------------

// A function is a reusable block of code.

// Topics
// - Function Declaration
// - Function Expression
// - Arrow Functions
// - Callback Functions
// - Higher-Order Functions
// - Closures
// - Lexical Scope
// - IIFE

// ----------------------------------------------------
console.log("Function Declaration");
// ----------------------------------------------------

// Function Declaration
// Can be called before its declaration because it is hoisted.

greet("Kedar");

function greet(name) {
    console.log(`Hello ${name}`);
}


// ----------------------------------------------------
console.log("----------------------------------------------------");


// Function Expression
// Function is stored inside a variable.
// Cannot be called before declaration.

const add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));


// ----------------------------------------------------
console.log("----------------------------------------------------");


// Arrow Function
// Shorter syntax introduced in ES6.

const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 6));


// Single line arrow function

const square = num => num * num;
console.log(square(5));

console.log("----------------------------------------------------");


// Callback Function
// A function passed as an argument to another function.
function display(result) {
    console.log(`Result : ${result}`);
}

function calculate(a, b, callback) {
    const ans = a + b;

    callback(ans);
}

calculate(20, 30, display);


// Anonymous callback

calculate(10, 40, function(result) {
    console.log(`Anonymous Callback : ${result}`);
});


// Arrow callback

calculate(5, 5, (result) => {
    console.log(`Arrow Callback : ${result}`);
});


// ----------------------------------------------------
console.log("----------------------------------------------------");


// Higher-Order Function
// A function that
// 1. Accepts another function
// OR
// 2. Returns another function

function operation(a, b, callback) {
    return callback(a, b);
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log(operation(10, 5, sum));

console.log(operation(10, 5, subtract));


// map() is also a Higher Order Function

const numbers = [1,2,3,4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);


// ----------------------------------------------------
console.log("----------------------------------------------------");


// Lexical Scope
// Inner functions can access variables of outer functions.

let company = "Google";

function outer() {

    let department = "Engineering";

    function inner() {

        console.log(company);

        console.log(department);

    }

    inner();

}

outer();


// ----------------------------------------------------
console.log("----------------------------------------------------");


// Closures
// A closure remembers variables from its outer function
// even after the outer function has finished executing.

function counter() {

    let count = 0;

    return function() {

        count++;

        console.log(count);

    }

}

const increment = counter();

increment();
increment();
increment();


// Another Closure Example

function greeting(message) {

    return function(name) {

        console.log(`${message} ${name}`);

    }

}

const sayHello = greeting("Hello");

sayHello("Kedar");

sayHello("Rahul");


// ----------------------------------------------------
console.log("----------------------------------------------------");


// IIFE
// Immediately Invoked Function Expression
// Executes immediately after creation.

(function(){

    console.log("IIFE Executed");

})();


// IIFE with parameters

(function(name){

    console.log(`Welcome ${name}`);

})("Kedar");


// Arrow Function IIFE

(() => {

    console.log("Arrow IIFE");

})();


// ----------------------------------------------------
console.log("----------------------------------------------------");


// Difference between Declaration and Expression

// Declaration -> Hoisted

hello();

function hello(){

    console.log("Function Declaration");

}


// Expression -> Not Hoisted

// test();  // ReferenceError

const test = function(){

    console.log("Function Expression");

};

test();


// ----------------------------------------------------
console.log("----------------------------------------------------");


// Real-world Example

const users = [
    "Alex",
    "John",
    "Kedar"
];

// map()

const upperUsers = users.map(user => user.toUpperCase());

console.log(upperUsers);

// filter()

const filtered = users.filter(user => user.startsWith("K"));

console.log(filtered);

// forEach()

users.forEach(user => {
    console.log(user);
});