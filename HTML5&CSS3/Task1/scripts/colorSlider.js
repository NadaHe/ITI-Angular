// change the color of the text according to the values of the sliders
document.getElementById("r1").addEventListener("change", function () {
    document.getElementById("words").style.color = "rgb(" + document.getElementById("r1").value + "," + document.getElementById("r2").value + "," + document.getElementById("r3").value + ")";
}
, false);
document.getElementById("r2").addEventListener("change", function () {
    document.getElementById("words").style.color = "rgb(" + document.getElementById("r1").value + "," + document.getElementById("r2").value + "," + document.getElementById("r3").value + ")";
}
, false);
document.getElementById("r3").addEventListener("change", function () {
    document.getElementById("words").style.color = "rgb(" + document.getElementById("r1").value + "," + document.getElementById("r2").value + "," + document.getElementById("r3").value + ")";
}
, false);
