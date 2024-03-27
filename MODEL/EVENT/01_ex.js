function displayMsg() {
    console.log("Button clicked From function!")
}

let btn = document.getElementById("btn");
function displayMsg1() {
    console.log("Button1 clicked From function!")
}



let btn1 = document.getElementById("btn1");
// by default, the value of useCapture is false
btn1.addEventListener('click', function(event){
    console.log("Button using Event Listener clicked!" + event.type);
})


let btn2 = document.getElementById("btn2");
function buttonCustomize() {
    console.log("Button3 clicked From function!");
    // adding color and animation attributes to the button after clicking
    btn2.style.color = "red";
    btn2.style.animation = "animate 1s infinite";
}
btn2.addEventListener('click', buttonCustomize);