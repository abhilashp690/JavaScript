let object1 = {
    name: "Abhilash",
    city: "Pune",
    getInfo: function() {
        return this.name + " is from " + this.city
    }
}

let object2 = {
    name : "Aditya"
}

let arr = ["Abhilash" , "Ameya"];

function f1() {

}

// So prototype chaining[for objects is ]  :- custom object.--proto__ -> Object.Prototype.__proto__ -> null
console.log("Proto for object1 - " , object1.__proto__);
console.log("Proto for object1.__proto - "  , object1.__proto__.__proto__);


// So prototype chaning[for array is]:- custom arr.__proto__ -> Array.Prototype.__proto -> Object.__proto.__ -> null
console.log("Proto for array is - " , arr.__proto__);
console.log("Proto for array.__proto is - " , arr.__proto__.__proto__);
console.log("Proto for array.__proto.__proto is - " , arr.__proto__.__proto__.__proto__);


// So prototype chaning[for function is]:- custom function.__proto__ -> Function.Prototype.__proto -> Object.__proto.__ -> null
console.log("Proto for function is - " , f1.__proto__);
console.log("Proto for function.__proto is - " , f1.__proto__.__proto__);
console.log("Proto for function.__proto.__proto is - " , f1.__proto__.__proto__.__proto__);


// ProtoType Inheritance is something like acquiring properties of another object
object2.__proto__ = object1;
console.log("Object2 Name - " + object2.name);
console.log("Object2 City - " + object2.city);
console.log("Object2 getInfo - " + object2.getInfo());
