console.log("High Order Functions are functions that take a function as an input and returns another function with some updation/modification/more detail in it")
console.log("Some base high order components demonstration are - map , filter , reduce method of array class.");

function highOrderFunction(a) {
    return (b) => {
        console.log("Performing addition using a and b , output is - " , (a+b))
        return (c) => {
            console.log("Performing addition of a , b and c  ,  output is - ",(a+b+c))
        }
    }
}


highOrderFunction(1)(5)
highOrderFunction(1)(5)(18)