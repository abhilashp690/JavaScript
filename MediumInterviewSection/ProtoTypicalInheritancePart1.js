var Person = function(name){

    console.log("Parent Constructor called...")
    this.name = name;

    this.sleep = function(){
        console.log(this.name + " is currently sleeping....")
    }

    this.walk = function() {
        console.log(this.name + " is currently walking....")
    }
}


var Criminal = function(name , crime) {
    Person.call(this , name);
    console.log("Criminal Constructor Called.....")
    this.crime = crime;
}


Criminal.prototype = Object.create(Person.prototype);

Criminal.prototype.constructor = Criminal;

Criminal.prototype.robBank = function() {
    console.log(this.crime +  " is being committed");
}
console.log(Criminal)
var arun = new Criminal("arun" , "bank-robbery")
arun.sleep();
arun.walk();
arun.robBank();