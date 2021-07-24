function getData() {
    console.log("Fetching api related data")
}

function throttleEventsForBetter(fn , delay){
    var context = this;
    var lastFetched = true;
    return function() {
        if(lastFetched){
            lastFetched = false;
            fn.apply(context);
            setTimeout(()=> {
                alert("Toggle flag")
                lastFetched = true;
            },delay)
        }
    }
}


let throttling = throttleEventsForBetter(getData , 600)