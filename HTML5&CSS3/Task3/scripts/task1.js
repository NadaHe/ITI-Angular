var myCanvas = document.getElementsByTagName("canvas")[0];
var ctx2d = myCanvas.getContext("2d");

//divide the canvas into 2 equal parts , the first part in gradient blue to white and the second part in gradient green to white

//first part
var grd = ctx2d.createLinearGradient(0, 0, 0, 500);
grd.addColorStop(0, "lightblue");
grd.addColorStop(1, "white");
ctx2d.fillStyle = grd;
ctx2d.fillRect(0, 0, 500, 250);

//second part
var grd2 = ctx2d.createLinearGradient(0, 150, 0, 500);
grd2.addColorStop(0, "green");
grd2.addColorStop(1, "white");
ctx2d.fillStyle = grd2;
ctx2d.fillRect(0, 250, 500, 500);

//add a rectanguler borders in a soccer goal shape in the middle of the canvas
ctx2d.beginPath();
ctx2d.moveTo(150, 330);
ctx2d.lineTo(150, 150);
ctx2d.lineTo(350, 150);
ctx2d.lineTo(350, 330);
ctx2d.strokeStyle = "black";
ctx2d.lineWidth = 3;
ctx2d.stroke();
ctx2d.closePath();

