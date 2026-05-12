//boolean for wacky mode
let wackyMode = false;
let surpriseMode = false;

/*
NEW JS FUNTION:
document.querySelector();
lets you select an html element and store the refrence in a variable for js
*/

const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const picture = document.querySelector("img");


// rainbow colors
const colors = [
    "#ff0000",
    "#ff7300",
    "#fffb00",
    "#48ff00",
    "#00ffd5",
    "#002bff",
    "#7a00ff",
    "#ff00c8"
];

let colorIndex = 0;
let colorInterval;

//JS can now change atributes and properties

//initial:
body.style.background = "#212529";

heading.textContent = "The Mostest Increable Website (Now with Javascript)";
heading.style.color = "white";

description.style.color = "white";

toggleBtn.style.color = "white";
toggleBtn.style.backgroundColor = "#212529";
toggleBtn.style.border = "1px solid white";
toggleBtn.style.borderRadius = "12px";
toggleBtn.style.padding = "8px 16px";
toggleBtn.style.cursor = "pointer";

function toggleMode() {
    wackyMode = !wackyMode;

    if (wackyMode == false) {

        // stop rainbow effect
        clearInterval(colorInterval);

        // REMOVE smooth transition
        body.style.transition = "none";

        body.style.background = "#212529";

        heading.textContent = "The Mostest Increable Website (Now with Javascript)";
        heading.style.color = "white";

        description.style.color = "white";

        toggleBtn.style.color = "white";
        toggleBtn.style.backgroundColor = "#212529";
        toggleBtn.style.border = "1px solid white";
        toggleBtn.style.borderRadius = "12px";
        toggleBtn.style.padding = "8px 16px";
        toggleBtn.style.cursor = "pointer";toggleBtn.textContent = "Get Wacky"

        picture.src = "Screenshot 2026-05-08 121817.png";

        //bug fixing:
        console.log("Wacky Mode Set:");
        console.log(wackyMode);

    } 
    else {

        heading.style.color = "#212529";
        description.style.color = "#212529";

        toggleBtn.style.color = "white";
        toggleBtn.style.backgroundColor = "#212529";
        toggleBtn.style.border = "1px solid white";
        toggleBtn.style.borderRadius = "12px";
        toggleBtn.style.padding = "8px 16px";
        toggleBtn.style.cursor = "pointer";
        toggleBtn.textContent = "Get Un-Wacky"

        picture.src = "Screenshot 2026-05-08 123333.png";

        // REMOVE smooth transition
        body.style.transition = "none";

        // start rainbow effect
        colorInterval = setInterval(() => {
            body.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }, 100);

        //bug fixing:
        console.log("Wacky Mode Set:");
        console.log(wackyMode);
    }
}

//atach funtion to button
toggleBtn.addEventListener("click", toggleMode);


//define element
const supriseButton = document.querySelector("#surprise");

//atach a function to the button
supriseButton.addEventListener("click", triggerSuprise);

//button setuo
supriseButton.style.color = "white";
supriseButton.style.backgroundColor = "#212529";
supriseButton.style.border = "1px solid white";
supriseButton.style.borderRadius = "12px";
supriseButton.style.padding = "8px 16px";
supriseButton.style.cursor = "pointer";



//what actually happnes
function triggerSuprise() {
    surpriseMode = !surpriseMode;

    if (surpriseMode == false && wackyMode == false) {
        picture.src = "Screenshot 2026-05-08 121817.png";
        supriseButton.textContent = "Surprise Mode";
    } 
    else if (!surpriseMode && wackyMode) {
        picture.src = "Screenshot 2026-05-08 123333.png";
        supriseButton.textContent = "Surprise Mode";
    }
    else {
        picture.src = "d7NmRG.gif";
        supriseButton.textContent = "Un-Surprise Mode";
    }

}