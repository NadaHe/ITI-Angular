var myCanvas = document.getElementById("myCanv");
var ctx2d = myCanvas.getContext("2d");

//draw straight line from the top left corner to the bottom right corner of the canvas step by step   
var x = 0;
var y = 0;
var interval = setInterval(function () {
    ctx2d.beginPath();
    ctx2d.moveTo(0, 0);
    ctx2d.lineTo(x, y);
    ctx2d.strokeStyle = "red";
    ctx2d.lineWidth = 5;
    ctx2d.stroke();
    ctx2d.closePath();
    x += 5;
    y += 5;
    if (x > 300) {
        clearInterval(interval);
        alert("Animation ended!");
    }
}
, 100);


