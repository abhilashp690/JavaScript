console.log("Promises in javascript are used when we want to ensure that there must be ordered execution.")

function f1(a) {
    return function (b) {
        var promise = new Promise((resolve, reject) => {
            if (a % b != 0)
                reject("Numbers are not multiple of each other - " + a + ":" + b)
            else
                resolve("Numbers are multiple of each other - " + a + ":" + b)
        });
        return promise;
    }
}

const f = f1(10);

const promise1 = f(5);
const promise2 = f(3);

promise1.then(data => {
    console.log("Data is - " + data)
}).catch(error => {
    console.log("Error is - " + error)
})


promise2.then(data => {
    console.log("Data is - " + data)
}).catch(error => {
    console.log("Error is - " + error)
})


const promise3 = Promise.all([promise1 , promise2]);
console.log("Promise All Demonstration")
promise3.then(data => {
    console.log("All Promises have resolved using all - " , data)
})
.catch(error => {
    console.log("SSS Some Promise have not been resolved , some error occured. Complete output is - " , error)
})



const promise4 = Promise.race([ promise2 , promise1]);
console.log("Promise allSettled Demonstration")
promise4.then( data => {
    console.log("All Promises have resolved using race - " , data)
})
.catch(error => {
    console.log("Some Promise have not been resolved , some error occured. Complete output is - " , error)
})
