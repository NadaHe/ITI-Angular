// add effects and shadow to the button when mouse is over it
function mouseOver() {
    document.getElementById("button").style.boxShadow = "0px 0px 10px 5px #888888";
    document.getElementById("button").style.backgroundColor = "pink";
}
function mouseOut() {
    document.getElementById("button").style.boxShadow = "none";
    document.getElementById("button").style.backgroundColor = "#0099cc";
}
