console.log("First class functions are nothing but normal functions that can be treated as varaibles.")
console.log("Functions can be passed as an argument to another function,function can be stored in a variable")
console.log("Function can be returned from another function.")


console.log("Case 1:-  storing function in a variable...")
const funca = function() {
    return 10;
}
console.log("Output is :- " + funca())

//------------------------------------------------------------------------------

console.log("Case 2:- passing function as argument to another function...")
function f2(f3) {
    console.log("Function passed as an argument - " , f3())
}

function f3() {
    return "I am Passed as a function"
}

f2(f3);

//-------------------------------------------------------------------------------

console.log("Case 3:- passing function and function returning another function...")
function f4() {
    return function() {
        console.log("I am returned from other function")
    }
}

f4()();