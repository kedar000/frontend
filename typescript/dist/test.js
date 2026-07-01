"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "kedar";
name = "askdn";
console.log(`this is : ${name}`);
//return promise in a function 
function returnPromise() {
    const number_retirn_from_promise = new Promise((resolve, reject) => {
        resolve(5);
    });
    return number_retirn_from_promise;
}
// const num : any = returnPromise();
console.log(returnPromise());
//# sourceMappingURL=test.js.map