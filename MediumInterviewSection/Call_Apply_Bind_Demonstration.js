function f1(a , b){
    if(a%b == 0)
        console.log("Even divisor - " + a + ":" + b)
    else
        console.log("Odd divisor - " + a + ":" + b)    
}


const bindedFunction = f1.bind(this , 10 , 5);
bindedFunction();

f1.call(this , 10 , 3);

f1.apply(this , [15 , 3]);