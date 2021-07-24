function highComputationWork() {
    try {
        const worker = new Worker("WorkerThread.js");
        worker.postMessage("Fetch High Computation Data")
    
        worker.onmessage = function(data) {
        document.querySelector("#highOutput").innerHTML = data;    
        }   
    }
    catch(error) {
        document.querySelector("#highOutput").innerHTML = error;
    }
}

function normalWork() {
    document.querySelector("#normalOutput").innerHTML = "Hello Normal Work"; 
}