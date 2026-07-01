// ----------------------------------------------------
// 4. Arrays
// ----------------------------------------------------

// Topics
// - map()
// - filter()
// - reduce()
// - find()
// - findIndex()
// - some()
// - every()
// - forEach()
// - sort()
// - reverse()
// - slice()
// - splice()
// - concat()
// - flat()
// - flatMap()
// - includes()
// - indexOf()

const numbers = [10,20,30,40,50];


// ----------------------------------------------------
console.log("map()");
// ----------------------------------------------------

const doubled = numbers.map(num => num * 2);

console.log(doubled);


// ----------------------------------------------------
console.log("-----------------------------------------");

// filter()

const even = numbers.filter(num => num % 20 === 0);

console.log(even);


// ----------------------------------------------------
console.log("-----------------------------------------");

// reduce()

const sum = numbers.reduce((acc,current)=>{

    return acc + current;

},0);

console.log(sum);


// ----------------------------------------------------
console.log("-----------------------------------------");

// find()

const found = numbers.find(num => num > 25);

console.log(found);


// ----------------------------------------------------
console.log("-----------------------------------------");

// findIndex()

const index = numbers.findIndex(num => num === 30);

console.log(index);


// ----------------------------------------------------
console.log("-----------------------------------------");

// some() - boolean

console.log(numbers.some(num => num > 45));

console.log(numbers.some(num => num > 100));


// ----------------------------------------------------
console.log("-----------------------------------------");

// every() - boolen

console.log(numbers.every(num => num > 5));

console.log(numbers.every(num => num > 20));


// ----------------------------------------------------
console.log("-----------------------------------------");

// forEach()

numbers.forEach(num => {

    console.log(num);

});


// ----------------------------------------------------
console.log("-----------------------------------------");

// sort() -> a-b ascending order , b-a - decending order 

const arr = [5,2,8,1,9];

arr.sort((a,b)=>a-b);

console.log(arr);


// ----------------------------------------------------
console.log("-----------------------------------------");

// reverse()

arr.reverse();

console.log(arr);


// ----------------------------------------------------
console.log("-----------------------------------------");

// slice()

const part = numbers.slice(1,4);

console.log(part);

console.log(numbers);


// ----------------------------------------------------
console.log("-----------------------------------------");

// splice()

const nums = [1,2,3,4,5];

nums.splice(2,1);

console.log(nums);


// ----------------------------------------------------
console.log("-----------------------------------------");

// concat()

const a = [1,2];

const b = [3,4];

console.log(a.concat(b));


// ----------------------------------------------------
console.log("-----------------------------------------");

// flat()

const nested = [1,[2,[3]],4];

console.log(nested.flat());

console.log(nested.flat(2));


// ----------------------------------------------------
console.log("-----------------------------------------");

// flatMap()

const words = ["hello world","javascript arrays"];

const result = words.flatMap(word => word.split(" "));

console.log(result);


// ----------------------------------------------------
console.log("-----------------------------------------");

// includes()

console.log(numbers.includes(30));

console.log(numbers.includes(100));


// ----------------------------------------------------
console.log("-----------------------------------------");

// indexOf()

console.log(numbers.indexOf(40));

console.log(numbers.indexOf(200));