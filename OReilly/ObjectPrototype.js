function phoneFunction(make , model , colour) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.warranty = 12;
    this.extendedWarranty = function(extended){
        this.warranty+=extended
    }
}

class phoneClass {
    constructor(make , model , colour) {
        this.make = make;
        this.model = model;
        this.colour = colour;
        this.warranty = 12;
    }

    extendedWarranty = function(extended){
        this.warranty+=extended
    }
}

var iPhone = new phoneFunction("Apple" , "IPhone 7" , "black")
//console.log(iPhone)
iPhone.extendedWarranty(44);
console.log(iPhone)

setTimeout(()=> {
    var iPhone = new phoneClass("SONY" , "Experia" , "blue")
    //console.log(iPhone)
    iPhone.extendedWarranty(24);
    console.log(iPhone)
} , 2000)
