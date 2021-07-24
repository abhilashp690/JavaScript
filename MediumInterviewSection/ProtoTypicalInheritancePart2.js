var Person = {
    species: "human",
    name: "ALIEN",
    age: 40,
    sayMySpecies: function() {
        console.log("Species name :- " , this.species)
    },
    sayMyName: function() {
        console.log("Person name is :- " , this.name)
    }
}

var Abhilash = Object.create(Person);
Abhilash.instrument = "Guitar";
Abhilash.playInstrument = function() {
    console.log(this.name + " is playing " + this.instrument)
}

Abhilash.sayMyName =  function() {
    console.log("Overriden name :- " , this.name)
}


var Sharvil = Object.create(Abhilash);
//Sharvil.name = "Sharvil";
console.log(Sharvil.species)
Sharvil.sayMySpecies()
Sharvil.playInstrument()
Sharvil.printMyAge = function() {
    console.log(`My Age is ${this.age}`);
}
Sharvil.printMyAge()

