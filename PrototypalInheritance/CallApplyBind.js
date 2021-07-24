let name = {
    firstName:'Abhilash',
    lastName:'Patil',
    fullName : function(passedArg1 , passedArg2) {
        console.log(this.firstName + ":" + this.lastName + ":" + passedArg1 + ":" + passedArg2)
    }
}

let name2 = {
    firstName:'Aditya',
    lastName:'Patil'
}

console.log("Call Method demonstration")
name.fullName.call(name2 ,"passed1" , "passed2");
console.log("\n")

console.log("Apply Method demonstration")
name.fullName.apply(name2 ,["passed1" , "passed2"]);
console.log("\n")


console.log("Bind Method Demonstration")
let bindedFunction = name.fullName.bind(name2 ,"passed1" , "passed2");
console.log("Binded Function is :- "  + bindedFunction)
bindedFunction();
console.log("\n")


console.log("Difference between call and apply is the way parameters are passed.")
console.log("For apply , we need to pass arraylist as arguments , while for call, comma separated")
console.log("Bind method will return an replica of the function binded with required context set")