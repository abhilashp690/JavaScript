const arr = [1,2,3,4,5,6,7,8,9,10];

const filteredEvenArr = arr.filter(elm => {
  return ((elm % 2) == 0)
});
console.log(filteredEvenArr);


const names = ["A" , "ZA" , "acs" , "sdfasf" , "yryers", "populat"];
const lengthOfNames = names.map( elm => {
   return elm.length
});

lengthOfNames.forEach(elm => console.log(elm))

const sumarr = [1,2,3,4,5,6,7,8,9];

const totalSum = sumarr.reduce(((a,b) => a+b) , 100);
console.log("Total Sum is - " + totalSum)


const people = [
    {
        firstName: "Abhilash",
        lastName: "Patil"
    },
    {
        firstName: "Mukesh",
        lastName: "Chugwani"
    },
    {
        firstName: "Sharvil",
        lastName: "Patil"
    }
]

const surNameGrouped = people.reduce((acc , current) => {
    if(acc[current.lastName]){
        acc[current.lastName].push(current)
    }
    else {
        acc[current.lastName] = [current]; 
    }
    return acc;
} , {});

console.log("People Grouped with Surname - " , JSON.stringify(surNameGrouped))


const arrFind = [1,2,3,4,5,6,7,8,9];

const findOutput = arrFind.find(elm => elm%7 == 0);
console.log(findOutput)


let myArr = [1,2,3,4,5,6,7]
myArr.splice(0 , 3);
console.log(myArr)

setTimeout(()=> {
    myArr = [1,2,3,4,5,6,7]
    myArr.slice(0,4)
console.log(myArr.slice(0,4))
} , 2000)