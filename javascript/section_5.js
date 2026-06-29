// ----------------------------------------------------
// 5. Strings
// ----------------------------------------------------

// Topics
// - Template Literals
// - split()
// - replace()
// - replaceAll()
// - trim()
// - slice()
// - substring()
// - startsWith()
// - endsWith()
// - includes()

const text = "  Hello JavaScript World  ";


// ----------------------------------------------------
console.log("Template Literals");
// ----------------------------------------------------

const name = "Kedar";
const age = 22;

console.log("My name is " + name + " and I am " + age + " years old.");

console.log(`My name is ${name} and I am ${age} years old.`);


// ----------------------------------------------------
console.log("-----------------------------------------");

// split()

const sentence = "JavaScript,React,TypeScript";

const words = sentence.split(",");

console.log(words);


// Split every character

console.log("Hello".split(""));


// ----------------------------------------------------
console.log("-----------------------------------------");

// replace()

const language = "I like Java";

const newLanguage = language.replace("Java", "JavaScript");

console.log(newLanguage);


// ----------------------------------------------------
console.log("-----------------------------------------");

// replaceAll()

const msg = "apple apple apple";

console.log(msg.replaceAll("apple", "orange"));


// ----------------------------------------------------
console.log("-----------------------------------------");

// trim()

const username = "   Kedar   ";

console.log(username);

console.log(username.trim());


// ----------------------------------------------------
console.log("-----------------------------------------");

// slice()

const company = "Google";

console.log(company.slice(0,3));

console.log(company.slice(3));

console.log(company.slice(-3));


// ----------------------------------------------------
console.log("-----------------------------------------");

// substring()

const framework = "ReactJS";

console.log(framework.substring(0,5));


// ----------------------------------------------------
console.log("-----------------------------------------");

// startsWith()

const email = "kedar@gmail.com";

console.log(email.startsWith("kedar"));

console.log(email.startsWith("admin"));


// ----------------------------------------------------
console.log("-----------------------------------------");

// endsWith()

console.log(email.endsWith(".com"));

console.log(email.endsWith(".org"));


// ----------------------------------------------------
console.log("-----------------------------------------");

// includes()

const course = "React with TypeScript";

console.log(course.includes("React"));

console.log(course.includes("Angular"));


// ----------------------------------------------------
console.log("-----------------------------------------");
// Search

const products = [
    "Laptop",
    "Keyboard",
    "Mouse"
];

const search = "lap";

const result = products.filter(product =>
    product.toLowerCase().includes(search.toLowerCase())
);

console.log(result);


// Remove extra spaces

const fullName = "   Kedar   ";

console.log(fullName.trim());


// Format Name

const first = "Kedar";
const last = "Kotha";

console.log(`${first} ${last}`);