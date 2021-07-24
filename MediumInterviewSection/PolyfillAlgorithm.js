console.log("Poly fill algorithm is alternative to bind method that may not be supported in some browsers.")


function customFunction(name , country , street , postalCode , flatNumber){
    console.log("Name is - "+ name + " , country is - "+ country + " , street is - " + street + " , age is - " + this.age + " , postal code - "+postalCode +" , flatnumber - " +  flatNumber)
}


Object.prototype.customBindFunction = function(contextProvided , ...args) {
    var executionFunction = this;
    return function(...someMoreArgs) {
        executionFunction.apply(contextProvided , [...args,...someMoreArgs]);
    }
}


const returnedFunction = customFunction.customBindFunction({age:20} , "Abhilash" , "Pune" , "Nanded City" , "411068")
returnedFunction(2002);

