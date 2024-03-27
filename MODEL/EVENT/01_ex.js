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