//get ref rto button
const but = document.querySelector("#clickMe");
//define func to alert
function aler() {
  alert("alert");
  //but.removeEventListener("click", aler);
}
//add func as event list
but.addEventListener("click", aler, {once:true});//aler now only triggers once.


//------------------------------------------------------------------------------------

function changeBGPink(){
    document.body.style.background="pink"
}

but.addEventListener("click", changeBGPink);

function changeText(){
    if (but.textContent == "Click"){
        but.textContent ="Clicked" 
    } else{
        but.textContent="Click"
    }
    //console.log(but.textContent=="Click")
}

but.addEventListener("click", changeText);

