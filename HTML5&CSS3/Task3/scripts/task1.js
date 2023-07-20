var myCanvas = document.getElementById("myCanv");
var ctx2d = myCanvas.getContext("2d");

//divide the canvas into 2 equal parts , the first part in gradient blue to white and the second part in gradient green to white

//first part
var grd = ctx2d.createLinearGradient(0, 0, 0, 500);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");
ctx2d.fillStyle = grd;
ctx2d.fillRect(0, 0, 500, 250);

//add a rectangler borders in a soccer goal shape in the middle of the canvas
ctx2d.beginPath();
ctx2d.moveTo(200, 250);
ctx2d.lineTo(200, 500);
ctx2d.lineTo(300, 500);
ctx2d.lineTo(300, 250);
ctx2d.strokeStyle = "black";
ctx2d.lineWidth = 5;
ctx2d.stroke();
ctx2d.closePath();

//second part
var grd2 = ctx2d.createLinearGradient(0, 150, 0, 500);
grd2.addColorStop(0, "green");
grd2.addColorStop(1, "white");
ctx2d.fillStyle = grd2;
ctx2d.fillRect(0, 250, 500, 500);


