onmessage = function(e) {
    alert("Worker Thread initialized......")
    let finalData = 0;
    for(var i=0 ; i<10000000000;i++)
        finalData += i;
    postMessage(finalData)    
}