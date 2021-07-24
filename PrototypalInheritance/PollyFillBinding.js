console.log("Poly Fill Binding is nothing but providing own implementation ")
console.log("of bind method as some browsers might not support inbuilt bind")

let name = {
    firstName:'Abhilash',
    lastName:'Patil'
}

console.log("\n");
function printFullName(city,state,country) {
    console.log(this.firstName + ":" + this.lastName + ":" + city + ":" + state+":" + country)
}



let originalbindedFunction = printFullName.bind(name,"Pune");
originalbindedFunction("Maharashtra" , "India");


Function.prototype.myBindMethod = function(...args) {
    var calledFunction = this;
    var context = args[0];
    params = args.slice(1);
    return function(...args2) {
        calledFunction.apply(context , [...params , ...args2]);
    }
}


var customBindedFunction = printFullName.myBindMethod(name , "Pune");
customBindedFunction("Maharashtra" , "India");

