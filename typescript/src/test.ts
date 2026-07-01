let name : string = "kedar"
name = "askdn"
console.log(`this is : ${name}`)
//return promise in a function 
function returnPromise():Promise<number>{

    const number_retirn_from_promise: Promise<number >  = new Promise((resolve , reject) => {
        resolve(5)
    })
    return number_retirn_from_promise
}

// const num : any = returnPromise();
console.log(returnPromise())