
document.querySelector("#grandparent")
.addEventListener("click",(e) =>{
    console.log("grandparent:- ");
    // e.stopPropagation();
},false);

document.querySelector("#parent")
.addEventListener("click",(e) =>{
    console.log("parent:- ");
},false);

document.querySelector("#child")
.addEventListener("click",(e) =>{
    console.log("child:- ");
},false);


function doSomething() {
    console.log("Button clicked")
}