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

//------------------------------------------------------------------------------------

//1. find div
//2. df changbggreen func
//3. add func as evnt

const butcon = document.querySelector(".button-container");

function changeBGGreen(event){
    //console.log(event.target)
    if(event.target.tagName === "BUTTON"){
        event.target.style.background="green";
    }
}

butcon.addEventListener("click", changeBGGreen)
