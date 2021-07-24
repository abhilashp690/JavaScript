const Human = {
  name : "Abhilash",
  livingclass : "Mammal",
  printMe: function() {
    return `Hi ${this.name} , I think you are a ${this.livingclass}`;
  }
}


const whale = Object.create(Human);
whale.name = "Blue Whale";
console.log(whale.printMe());


function Employee(name){
  this.name = name;
  this.printEmployeeDetails = function () {
      return `Hi , I am ${this.name} and I work for ${this.dept} department`
  }
}

Employee.dept = "Computer Science";
Employee.printMyDepartment = function() {
  return `Department name is ${this.dept}`
}

let Manager = Object.create(Employee);
Manager.managerName = "Umesh";
Manager.dept = "Information Technology";
Manager.printManagerName = function() {
  return `Manager name is ${this.managerName}`
}

 console.log(Manager.printManagerName());
// console.log(Manager.printMyDepartment());
 console.log(Manager.printEmployeeDetails())

