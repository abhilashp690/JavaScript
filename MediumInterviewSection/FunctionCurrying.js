
console.log("Function currying demonstration....")
console.log("Currying is a technoque of evaluating function with multiple argument into sequence of functions with single arguments.");
console.log("Function currying is basivcally transforming a function from the form f(a,b,c) to the form f(a)(b)(c)")
console.log("Function currying should be used in case same function is used multiple times. Same argument is passed multiple times.")

function normalAdd10(a , b){
    return a+b;
}

console.log(normalAdd10(10 , 10));
console.log(normalAdd10(10 , 20));

console.log("Currying is asked majorly in interviews as it involves many javascript functionality.1].Higher Order Function. 2].Closure 3].Also allows to reuse code part that is constanatly repeated.");

function curryingAdd10(a){
    return function(b){
        return a+b;
    }
}

console.log("Using currying where first parameter to add function is always 10...")

const add10 = curryingAdd10(10);
console.log(add10(1))
console.log(add10(2))
console.log(add10(3))

console.log("-------------------------------------------------------------");

console.log("Implementing advanced concept of currying ....currying a function that takes n arguemnts.");

function multiply(a,b) {
    return a*b;
}

function advancedCurrying(a) {
    return function(b){
        if(b){
            return advancedCurrying(multiply(a,b));
        } else {
            return a;
        }
    }
}

const output = advancedCurrying(10)(2)(2)(20)();
console.log("Advanced Currying with n variables = " + output);

console.log("-------------------------------------------------------------");

console.log("Implementing advanced concept of currying ....currying a function that takes a function and returns its curried transformation.");

function getMeCurriedFunction(fnc) {
    return function curryMe(...args){
        if(args.length >= fnc.length){
            return fnc(...args);
        } else {
            return function(...partialArgs) {
                return curryMe(...args , ...partialArgs);
            }
         }
    }
}

const curriedMultipleFnc = getMeCurriedFunction(multiply);
const outputCurried = curriedMultipleFnc(10)(20);
console.log("Output after god currying function = " + outputCurried);

