console.log("Hoisting in javascript is nothing but moving up function declarations")
console.log("or variable declarations to top of functional/global scope/execution context")

console.log("Hoisting is performed only for var and function.")
console.log("Hoisting is not performed for let,const,arrow functions,new function()")

console.log("\nSince we have used function and var here , this will be hoisted.")
{
    console.log("Initial Data :- " + data);
    data = 30;
    console.log("Updated Data :- " + data);
    f2();
    var data;
    function f2() {
        console.log("f2 is triggered....")
    }
}
console.log("Value of data is - " + data);
f2();

console.log("\nSince we used let and const here,this will result in exception as they are not hoisted")
function hahaha(){
    try {
        console.log("Initial Data :- " + data4);
        data4 = 30;
        console.log("Updated Data :- " + data4);
        f3();
        var data4;
        f3 = new function() {
            console.log("f3 is triggered....")
        }
    } catch (error) {
        console.log("Error is :- " + error)
    }
}
hahaha();

var a = [1,2,3,4,5,6]
console.log(a.slice(1));