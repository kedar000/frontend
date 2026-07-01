// ----------------------------------------------------
// 7. Asynchronous JavaScript
// ----------------------------------------------------

// Topics
// - Synchronous vs Asynchronous
// - Callbacks
// - Promises
// - then()
// - catch()
// - finally()
// - async / await
// - Fetch API
// - Error Handling


// ----------------------------------------------------
console.log("Synchronous JavaScript");
// ----------------------------------------------------

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");


// ----------------------------------------------------
console.log("-----------------------------------------");

// Asynchronous JavaScript

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 500);

console.log("End");


// ----------------------------------------------------
console.log("-----------------------------------------");

// Callback Function

function fetchData(callback){

    setTimeout(() =>{

        const data = {
            id:1,
            name:"Kedar"
        };

        callback(data);

    },1000);

}

fetchData((data)=>{

    console.log(`Data from callback fucntion : `,data);

});


// ----------------------------------------------------
console.log("-----------------------------------------");

// Promise

const promise = new Promise((resolve,reject)=>{

    const success = true;

    if(success){

        resolve("Data Loaded Successfully");

    }else{

        reject("Something went wrong");

    }

});

promise
.then(result=>{

    console.log(result);

})
.catch(error=>{

    console.log(error);

})
.finally(()=>{

    console.log("Promise Completed");

});


// ----------------------------------------------------
console.log("-----------------------------------------");

// Promise Example

function getUser(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve({
                id:1,
                name:"Kedar"
            });

        },1000);

    });

}

getUser()
.then(user=>{

    console.log(`Data from Promise : `,user);

});


// ----------------------------------------------------
console.log("-----------------------------------------");

// Async Await

async function loadUser(){

    const user = await getUser();

    console.log(`Data from async/await : ` ,user);

}

loadUser();


// ----------------------------------------------------
console.log("-----------------------------------------");

// Error Handling with async/await

function getProduct(){

    return new Promise((resolve,reject)=>{

        reject("Product Not Found : From get product function async/await");

    });

}

async function loadProduct(){

    try{

        const product = await getProduct();

        console.log(product);

    }catch(error){

        console.log(error);

    }

}

loadProduct();


// ----------------------------------------------------
console.log("-----------------------------------------");

// Fetch API

async function getPosts(){

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        const data = await response.json();

        console.log(data);

    }catch(error){

        console.log(error);

    }

}

getPosts();


// ----------------------------------------------------
console.log("-----------------------------------------");

// Multiple Promises

const p1 = Promise.resolve(10);

const p2 = Promise.resolve(20);

const p3 = Promise.resolve(30);

Promise.all([p1,p2,p3])

.then(result=>{

    console.log(result);

});


// ----------------------------------------------------
console.log("-----------------------------------------");

// Promise.race()

const fast = new Promise(resolve=>{

    setTimeout(()=>resolve("Fast"),1000);

});

const slow = new Promise(resolve=>{

    setTimeout(()=>resolve("Slow"),3000);

});

Promise.race([fast,slow])

.then(result=>{

    console.log(result);

});