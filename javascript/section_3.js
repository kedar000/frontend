// ----------------------------------------------------
// 3. Objects
// ----------------------------------------------------

// Topics
// - Object Literals
// - Object Methods
// - this Keyword
// - Destructuring
// - Spread Operator (...)
// - Rest Operator (...)
// - Optional Chaining (?.)
// - Nullish Coalescing (??)
// - Object.keys()
// - Object.values()
// - Object.entries()
// - Object.assign()

console.log("Object Literals");

// Object Literal
// Collection of key-value pairs.

const user = {
  name: "Kedar",
  age: 22,
  city: "Delhi",
};

console.log(user);

// Access properties

console.log(user.name);
console.log(user["age"]);

// Add property

user.country = "India";

console.log(user);

// Update property

user.age = 23;

console.log(user);

// Delete property

delete user.city;

console.log(user);

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Object Methods
// Functions inside objects.

const student = {
  name: "Kedar",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

student.greet();

// ----------------------------------------------------
console.log("----------------------------------------------------");

// this Keyword
// Refers to the current object.

const employee = {
  name: "Alex",

  printName() {
    console.log(this.name);
  },
};

employee.printName();

// Arrow functions do NOT have their own this

const demo = {
  name: "Rahul",

  normalFunction() {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this);
  },
};

demo.normalFunction();
demo.arrowFunction();

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Object Destructuring

const person = {
  name: "Kedar",

  age: 22,

  city: "Delhi",
};

const { name, age } = person;

console.log(name);

console.log(age);

// Rename variable

const { city: location } = person;

console.log(location);

// Default value

const { country = "India" } = person;

console.log(country);

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Spread Operator
// Copy object

const obj1 = {
  a: 1,

  b: 2,
};

const obj2 = {
  ...obj1,

  c: 3,
};

console.log(obj2);

// Merge Objects

const address = {
  city: "Delhi",
};

const details = {
  age: 22,
};

const merged = {
  ...address,

  ...details,
};

console.log(merged);

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Rest Operator

const car = {
  brand: "BMW",

  model: "X5",

  color: "Black",
};

const { brand, ...remaining } = car;

console.log(brand);

console.log(remaining);

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Optional Chaining (?.)
// Prevents errors if property doesn't exist.

const customer = {
  name: "Kedar",

  address: {
    city: "Delhi",
  },
};

console.log(customer.address.city);

console.log(customer.address?.city);

console.log(customer.company?.name);

// Without Optional Chaining

// console.log(customer.company.name);

// TypeError

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Nullish Coalescing (??)
// Uses default value only if null or undefined.

const username = null;

console.log(username ?? "Guest");

const score = 0;

console.log(score ?? 100);

const isLoggedIn = false;

console.log(isLoggedIn ?? true);

// Difference from ||

console.log(0 || 100);

console.log(0 ?? 100);

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Object.keys()

const laptop = {
  brand: "Dell",

  ram: "16GB",

  processor: "i7",
};

console.log(Object.keys(laptop));

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Object.values()

console.log(Object.values(laptop));

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Object.entries()

console.log(Object.entries(laptop));

// Iterate

Object.entries(laptop).forEach(([key, value]) => {
  console.log(`${key} : ${value}`);
});

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Object.assign()

const source = {
  a: 1,

  b: 2,
};

const target = {
  c: 3,
};

const result = Object.assign(target, source);

console.log(result);

// Clone Object

const cloned = Object.assign({}, source);

console.log(cloned);

// ----------------------------------------------------
console.log("----------------------------------------------------");

// Real React Examples

const apiUser = {
  id: 1,

  name: "Kedar",

  address: {
    city: "Delhi",
  },
};

// Destructuring

// const { id, address } = apiUser;

// console.log(id);

// Optional Chaining

console.log(apiUser.address?.city);

// Spread

const updatedUser = {
  ...apiUser,

  age: 22,
};

console.log(updatedUser);

// Rest

const { name: userName, ...rest } = updatedUser;

console.log(userName);

console.log(rest);
