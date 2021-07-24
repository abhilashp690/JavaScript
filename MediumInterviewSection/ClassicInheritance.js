class Person {
    constructor(name) {
        this.name = name;
    }

    sleep(){
        console.log(this.name + " is currently sleeping....")
    }

    walk() {
        console.log(this.name + " is currently walking....")
    }
}

Person.prototype.eat = function() {
    console.log(`${this.name} is currently eating ....`);
}

class Criminal extends Person{
    constructor(name)
    {
        super(name);
    }

    sleep(){
        console.log(`Criminal ${this.name} does not sleep....`)
    }

    robBank(){
        console.log(`${this.name} is currently robbing a bank....`)
    }
}


var abhi = new Person("Abhilash")
abhi.sleep();
abhi.walk();
abhi.eat();

var apurva = new Criminal("Apurva")
apurva.sleep();
apurva.walk();
apurva.robBank();
apurva.eat();

console.log("In case of inheritance , child class __proto__ points to parent class methods,constructor , thats why it is allowed to access their properties")