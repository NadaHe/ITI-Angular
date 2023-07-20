var myCanvas = document.getElementById("myCanv");
var ctx2d = myCanvas.getContext("2d");

//canvas for a right angle triangle with color red
ctx2d.beginPath();
ctx2d.moveTo(100, 50);
ctx2d.lineTo(100, 250);
ctx2d.lineTo(30, 250);
ctx2d.fillStyle = "red";
ctx2d.fill();
ctx2d.closePath();

//write label for the triangle on each side
ctx2d.font = "20px Arial";
ctx2d.fillStyle = "black";
ctx2d.fillText("a", 110, 150);
ctx2d.fillText("b", 65, 270);
ctx2d.fillText("c", 50, 150);




