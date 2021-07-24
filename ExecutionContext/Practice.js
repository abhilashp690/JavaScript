// const arr = [1,2,3,4,5,6,7,8,9];

// const evenNumbers = arr.filter((elm) => { return elm%2 == 0});
// console.log("Even Number array = " + evenNumbers);

// const doubledNumbers = arr.map((elm) => {
//     return elm * 2;
// });
// console.log("Doubled array = " + doubledNumbers);

// const finalSum = arr.reduce((accumulator , currSum) => {
//     return accumulator+currSum;
// } , 10);
// console.log("Final Sum is = " + finalSum);


// const people = [
//     {
//         firstName: "Abhilash",
//         lastName: "Patil"
//     },
//     {
//         firstName: "Mukesh",
//         lastName: "Chugwani"
//     },
//     {
//         firstName: "Sharvil",
//         lastName: "Patil"
//     }
// ];

// console.log("Grouping people by their surname here - ");
// const groupedDetails = people.reduce((acc , person) => {
//     if(acc[person.lastName]){
//         acc[person.lastName].push(person);
//     } else {
//         acc[person.lastName] = [person];
//     }
//     return acc;
// } , {});
// console.log("Grouped Details - " , JSON.stringify(groupedDetails))

// const isPresent = arr.find((elm) => elm%4 == 0);
// console.log("Is Present Number - " + isPresent);


// const slicedArray = arr.slice(0,3);
// console.log("Sliced Array - " + slicedArray);

// arr.splice( -1, 10);
// console.log("Spliced Array - " + arr);


// const f1 = function() {
//     console.log("Callback Function has been triggered.");
// }

// const f2 = function(f1){
//     setTimeout(() => {
//         console.log("Computation Completed");
//         f1();
//         console.log("You cannot return anything from setTimeout because the moment setTimeout is called , execution is transferred to web apis and function completes execution and it returns , so returned value of setTimeout will not be returned to original function.")
//     } , 3000);
// }
// f2(f1);


// const f3 = function(x) {
//     return new Promise((resolve , reject) => {
//         if(x%2==0)
//             resolve("Number is even");
//         else
//             reject("Number is not even");    
//     })
// };

// f3(5).then((response) => {
//     console.log("Response Success = " + response);
// })
// .catch(function(error){
//     console.log("Error = " + error);
// });



// const asyncAwaitDemonstration = async function() {
//     try {
//     const output = await f3(5);
//     console.log("Output is = " + output)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// asyncAwaitDemonstration();


// function f1() {
//     setTimeout(()=> {
//         console.log("Finally i have completed")
//     } , 1000);
// }


// f1();

// for(var i=0 ; i< 50000 ; i++){
//     console.log(i);
// }

// const fobj1 = {
//     name : "Abhilash",
//     dept : "CS",
//     printDetails: function() {
//         console.log(`Hi , my name is ${this.name} and I belong to ${this.dept} department.`)
//     }
// }

// function f1(a,b,c) {
//     console.log("Addition of 3 numbers is - " + (a+b+c));
// }

// f1.call(null , 1,2,3);
// f1.apply(null , [1,2,3]);

// const f2 = f1.bind(this,1,2);
// f2(1);

// fobj1.printDetails();

// const fobj2 = {
//     name : "Fobj2",
//     dept : "Associate"
// }

// fobj1.printDetails.call(fobj2);
// fobj1.printDetails.apply(fobj2);
// const fbind = fobj1.printDetails.bind(fobj2);
// fbind();

// class NormalPerson {

//     constructor(name){
//         if(name)
//             this.name = name;
//         else
//             this.name = "DEFAULTNAME";
//     }

//     sleep() {
//         console.log(`${this.name} is sleeping.`);
//     }

//     eat() {
//         console.log(`${this.name} is eating.`);
//     }

//     walk() {
//         console.log(`${this.name} is walking.`);
//     }
// }


// class Thief extends NormalPerson {
//     constructor(name, age){
//         super(name)
//         this.age = age;
//     }

//     sleep() {
//         console.log(`${this.name} never sleeps.`);
//     }

//     rob(){
//         console.log(`${this.name} is going to attempt a robbery.`);
//     }
// }


// console.log("JAVASCRIPT does not allow multiple constructors , hence if we need to do something , that has to be done manually.");

// var personP = new NormalPerson("Abhi");
// personP.eat(); personP.sleep(); personP.walk(); console.log(personP.name);

// var personP2 = new NormalPerson();
// personP2.eat(); personP2.sleep(); personP2.walk(); console.log(personP2.name);

// var thief = new Thief("Chor" , 34);
// thief.rob();
// thief.sleep();
// thief.eat();

// dependent = "Sharvil";

// function closureDemonstration() {
//     var name = "Abhilash";
//     var age = 55;
//     return {
//         getAge: () => {
//             console.log("Age is - " + age);
//         },
//         setAge: (value) => {
//             age = value;
//         },
//         doSomePrcessing: () => {
//             console.log(`${name} has completed the processing at the age of ${age} for ${dependent}`)
//         }
//     }
// }

// const fClosure1 = closureDemonstration();
// // name = "OUTER";
// fClosure1.doSomePrcessing();
// fClosure1.getAge();
// fClosure1.setAge(1111);
// fClosure1.doSomePrcessing();


// var inputArray = [1 , 2 , [3,4,5] , [[[6]]]];
// var outputArray = [];

// flattenAnArray(inputArray , outputArray);
// console.log("Flattened Array - " + outputArray);
// function flattenAnArray(inputArray , outputArray) {
//     for(var i=0 ; i<inputArray.length ; i++){
//         if(Array.isArray(inputArray[i])){
//             flattenAnArray(inputArray[i] , outputArray);
//         }
//         else
//             outputArray.push(inputArray[i]);
//     }
// }


console.log("Polyfill algorithm is an alternative to bind function as the internal bind function might not work in some browsers.");
const multiplyBind =  function(a , b){
    return a*b;
} 
const bindedFunction = multiplyBind.bind(this , 1,2);
console.log(bindedFunction());


Object.prototype.myCustomBindFunction = function(context , ...args) {
    const actualFunction = this;
    return function(...partialArgs) {
        return actualFunction.apply(context , [...args , ...partialArgs]);
    }
}

const customMultipleBind = multiplyBind.myCustomBindFunction(this);
const output = customMultipleBind(20 , 30);
console.log("OUTPUT IS = " + output);




