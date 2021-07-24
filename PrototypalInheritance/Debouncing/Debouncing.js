
function getAPIData() {
    console.log("Fetching API Data after every pause of 300 seconds");
}

function trackKeyPressEvent(func , delay) {
    var context = this;
    var timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.call(context);
        },delay)
    }
}


let debouncing = trackKeyPressEvent(getAPIData , 300);