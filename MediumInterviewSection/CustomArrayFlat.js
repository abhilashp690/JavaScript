var inputArray = [1 , 2 , [3,4,5] , [[[6]]]];
var outputArray = [];

function customArrayFlat(inputArray , outputArray) {
    for(var data = 0 ; data < inputArray.length ; data ++){   
        if(Array.isArray(inputArray[data]))
            customArrayFlat(inputArray[data] , outputArray);
        else
            outputArray.push(inputArray[data]);
    }
}

customArrayFlat(inputArray , outputArray);

console.log("Output Array is - " , outputArray)
