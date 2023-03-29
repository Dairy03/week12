//get ref rto button
const but = document.querySelector("#clickMe")
//define func to alert
function aler(){
    alert("alert");
}
//add func as event list
but.addEventListener("click", aler);