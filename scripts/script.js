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

butcon.addEventListener("mouseover", changeBGGreen)

// 2. define func to chaneg textcolor
function changeTextColor(event){
    console.log(event.target.textContent)//event = what was clicked on.
    //if red but is clicked, textcolor should be red.
    event.target.style.color = event.target.textContent;

    //for adding css styles:
    //event.target.classList.add(event.target.textContent)

}

//3 event listener
butcon.addEventListener("click", changeTextColor)


function addNewElements(){
        //createelement for para and but
        const purplebut = document.createElement("button");
        const purppara = document.createElement("p");
        //append child 
        document.body.appendChild(purppara);
        document.body.appendChild(purplebut);

        purplebut.textContent = "pruple";
        purppara.textContent = "sssssssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";        
        //textcontent
        purplebut.addEventListener("mouseover", changeBGGreen)

}

but.addEventListener("click", addNewElements)