console.log("Closure preserves the scope of function at the time of declaration.")
console.log("One use case of using closure can be to implement private data in javascript , also for creating immutable object")


function closureExample() {
    name = "closure_example_inner"
    return function() {
        console.log("Data declared is :- ",name)
    }
}

name = "closure_example_outer"
const func1 = closureExample();
console.log("Doing some processing now :- ")
func1();


console.log("Private Data Use case using closure....")
function privateDemonstration() {
    let name = "Abhilash"
    return {
        getName: () => name,
        setName: (value) => {name = value}
    }
}

var data = privateDemonstration();
console.log("Data - " + data.name)
console.log("Data using get - " + data.getName())
data.setName("Apurva")
console.log("Data after set - " + data.getName())    





