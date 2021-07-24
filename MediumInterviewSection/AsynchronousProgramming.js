console.log("Synchronous Programming Demonstration.....")
console.log("Synchronous Start")
var fetchData = () => {
    console.log("Data Fetched...")
}
fetchData()
console.log("Synchronous End")

console.log("------------------------------------------------------------------\n")

console.log("Asynchronous Programming Demonstration.....")
console.log("Asynchronous Start")
var fetchData = () => {
    setTimeout(() => {
        console.log("Asynchrnous Data Fetching...")
        console.log("Asynchronous tasks are possible in javascript because of webapis of browsers that provide required interface and methods..")
    },2000) 
}
fetchData()
console.log("Asynchronous End")

console.log("------------------------------------------------------------------\n")

console.log("Asynchronous Programming using callback functions")
console.log("Asynchronous Start")
var fetchData = (callback) => {
    setTimeout(() => {
        console.log("Asynchrnous Data Fetching using callback...")
        callback({userName : "Abhilash"})
    },2000) 
}

var fetchUserVideos = (userName , callback) => {
    setTimeout(() => {
        callback({videos : [1,2,3,4,5]})
    },2000) 
}

var fetchIndividualVideoData = (videosId , callback) => {
    setTimeout(()=> {
        callback({videoDetails : "JAVA ASYNC TUTORIAL"})
    },2000)
}

fetchData((user) => {
    console.log("User is :- " , user)
    fetchUserVideos(user.userName ,(videos)=> {
        console.log("Videos List " , videos)
        fetchIndividualVideoData(videos[0] , (title) => {
            console.log("Video Details " , title)
        })
    })
})
console.log("Asynchronous End")

console.log("------------------------------------------------------------------\n")

console.log("Async Programming using promises :-")


var fetchDataPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Asynchrnous Data Fetching using callback...")
            resolve({userName : "Sharvil"})
        },5000) 
    })
}

var fetchUserVideosPromise = (userName) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({videos : [1,4,5]})
        },5000)
    })
}

var fetchIndividualVideoDataPromise = (videosId) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve({videoDetails : "JAVA ASYNC TUTORIAL USING PROMISE"})
        },5000)
    })   
}


fetchDataPromise().then(result => {
    fetchUserVideosPromise().then(video => {
        fetchIndividualVideoDataPromise().then(title => {
            console.log("Result is :- " , JSON.stringify(result) + " video is " , JSON.stringify(video) + " title is - " , title)
        })
    })
})


console.log("Promise.all function demonstration ....")

const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({videos : [1,4,5,40]})
    },5000)
});

const promise2 = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve({videoDetails : "JAVA ASYNC TUTORIAL USING PROMISE ALL"})
    },5000)
});

Promise.all([promise1 , promise2]).then(data => {
    console.log("----------Data is - " , JSON.stringify(data))
})


console.log("Asynchronous Programming using asyn await terminology .....")



var fetchDataAwait = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve({userName : "Abhilash"})
        },2000)
    }) 
}


const getAllPromisesDataUsingSAwaitAsync = async function() {
    try{
    const user = await fetchDataPromise();
    const videoDetails = await fetchUserVideosPromise(user.userName);
    const individualVideoDataForLog = await fetchIndividualVideoDataPromise(10);
    console.log("Final Data Fetched :- " , individualVideoDataForLog)
    }
    catch(error) {
        console.log("Error are :- " , error)
    }
}


setTimeout(() => {
    getAllPromisesDataUsingSAwaitAsync();
} , 10000)