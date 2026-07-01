// ----------------------------------------------------
// Tuples
// ----------------------------------------------------

// Topics
// - Basic Tuples
// - Accessing Values
// - Updating Values
// - Optional Elements
// - Readonly Tuples
// - Named Tuples
// - Rest Elements
// - Tuple vs Array


// ----------------------------------------------------
console.log("Basic Tuple");
// ----------------------------------------------------

const employee: [number, string] = [101, "Kedar"];

console.log(employee);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Accessing Values

console.log(employee[0]);
console.log(employee[1]);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Updating Values

employee[0] = 102;
employee[1] = "Rahul";

console.log(employee);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Optional Tuple Elements

const student: [number, string, number?] = [

    1,

    "Kedar"

];

console.log(student);

const student2: [number, string, number?] = [

    2,

    "Rahul",

    22

];

console.log(student2);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Readonly Tuple

const point: readonly [number, number] = [

    10,

    20

];

console.log(point);

// point[0] = 100; ❌

// point.push(30); ❌


// ----------------------------------------------------
console.log("-----------------------------------------");

// Named Tuple (TS 4+)

const user: [id: number, name: string] = [

    1,

    "Kedar"

];

console.log(user);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Rest Elements

const colors: [string, ...string[]] = [

    "Red",

    "Blue",

    "Green",

    "Yellow"

];

console.log(colors);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Function Returning Tuple

function getUser(): [number, string] {

    return [

        1,

        "Kedar"

    ];

}

const userData = getUser();

console.log(userData);


// ----------------------------------------------------
console.log("-----------------------------------------");

// Destructuring Tuple

const [id, name] = userData;

console.log(id);

console.log(name);


// ----------------------------------------------------
console.log("-----------------------------------------");

// React Example (Similar to useState)

function useCounter(): [number, () => void] {

    let count = 0;

    function increment() {

        console.log(++count);

    }

    return [count, increment];

}

const [count, increment] = useCounter();

console.log(count);

increment();

increment();