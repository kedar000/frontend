// -   Variables: var, let, const - used to store values
// -   Scope (Global, Function, Block)
// -   Hoisting
// -   Strict Mode
// -   Data Types (Primitive vs Reference)
// -   Type Coercion
// -   Truthy & Falsy Values



// -   Scope (Global, Function, Block)
let global_scope = "globalscope";

function functionscope(){
    let fun_scope = "functionscope";
    // var block = "var block scope"
    console.log(`Function scope : ${fun_scope}`)
}
functionscope()
// console.log(`Function scope : ${fun_scope}`)

{
    // var ignores block scope 
    let block_scope = "block scope"
    var block = "var block scope"
    console.log(`block scope : ${block_scope}`);
    
}
// console.log(`block scope : ${block_scope}`);
console.log(`block scope : ${block}`);

console.log(`global variable : ${global_scope}`);


// ----------------------------------------------------
console.log(" ----------------------------------------------------");

// -   Hoisting

//problem with var 
console.log(a);

var a = 10;  //-> gives undefined as output
// let a = 10;  // gives refference error 

//internal working 
// var a;
// console.log(a);
// a = 10;

// let ans const also works as same but they stay in the temporal dead zone until there decleration is reached 


console.log(" ----------------------------------------------------");

//Strict Mode

//this is not allowed in strict mode 
name = "Kedar";

console.log(name);

"use strict";  
let age = 20;

console.log(" ----------------------------------------------------");
// -   Data Types (Primitive vs Reference)

// string , number , boolean , null , undefiend , symbol , bigint -> primitive types 
// object , array , function , map , set , date -> reference types 

const obj1 = {
    name : "kedar"
}

const obj2 = obj1;
obj2.name = " changed ";

console.log(obj1.name);

let pri_a= 10;
let pri_b = pri_a;
pri_b = 20;
console.log(pri_a);
console.log(pri_b)

console.log(" ----------------------------------------------------");
// -   Type Coercion -> js automatically converts one type t0 another during operations 
console.log("5" + 2);
console.log(typeof "5" + 2);
console.log("5" - 2);
console.log( typeof "5" - 2);
console.log(true + 1);
console.log(typeof (true + 1));
console.log(false + 10);
console.log(typeof (false + 10));
console.log(5 == "5");
console.log(5 === "5");


