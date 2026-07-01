// ----------------------------------------------------
// Type Aliases
// ----------------------------------------------------

// Topics
// - Basic Type Alias
// - Object Type Alias
// - Function Type Alias
// - Array Type Alias
// - Tuple Type Alias
// - Primitive Type Alias
// - Union Type Alias
// - Intersection Type Alias
// - Type Alias vs Interface


// ----------------------------------------------------
console.log("Primitive Type Alias");
// ----------------------------------------------------

type Name = string;
type Age = number;
type IsLoggedIn = boolean;

const username: Name = "Kedar";
const userAge: Age = 22;
const loggedIn: IsLoggedIn = true;

console.log(username);
console.log(userAge);
console.log(loggedIn);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Object Type Alias

type User = {

    id: number;

    name: string;

    age: number;

};

const user: User = {

    id: 1,

    name: "Kedar",

    age: 22

};

console.log(user);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Function Type Alias

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {

    return a + b;

};

console.log(add(10, 20));


// ----------------------------------------------------
console.log("-----------------------------------------");

// Array Type Alias

type NumberArray = number[];

const numbers: NumberArray = [

    10,

    20,

    30

];

console.log(numbers);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Tuple Type Alias

type Employee = [number, string];

const employee: Employee = [

    101,

    "Kedar"

];

console.log(employee);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Union Type Alias

type ID = number | string;

const id1: ID = 101;
const id2: ID = "EMP101";

console.log(id1);
console.log(id2);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Intersection Type Alias

type Person = {

    name: string;

};

type Developer = {

    language: string;

};

type SoftwareEngineer = Person & Developer;

const dev: SoftwareEngineer = {

    name: "Kedar",

    language: "TypeScript"

};

console.log(dev);


// ----------------------------------------------------
console.log("-----------------------------------------");

// React Style Example

type ButtonProps = {

    title: string;

    disabled?: boolean;

};

function Button(props: ButtonProps) {

    console.log(props.title);

}

Button({

    title: "Login"

});


// ----------------------------------------------------
console.log("-----------------------------------------");

// Using Type Alias Everywhere

type Product = {

    id: number;

    title: string;

    price: number;

};

const products: Product[] = [

    {

        id: 1,

        title: "Laptop",

        price: 80000

    },

    {

        id: 2,

        title: "Keyboard",

        price: 2500

    }

];

console.log(products);