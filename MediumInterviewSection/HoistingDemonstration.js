f1();

function f1() {
    a = 20
    console.log("A is - " + a)
    
    {
        console.log(d);
        var d = 30;
        const c = 30;
        var c1 = 40;
        console.log("Value of c is - " + c)
    }
    console.log("Value of c after block is - " + c1)
    console.log("After Declaration , inside f1 - " + a);
}


console.log("Value of a is - " + a)