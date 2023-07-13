function circleArea() {
    var radius = parseFloat(prompt("Enter radius to calculate circle area: "));
    alert("Area of circle is " + (Math.PI * Math.pow(radius, 2)));
}

function squareRoot() {
    var number = parseFloat(prompt("Enter value to get its square value: "));
    alert("Square root of the entered number is " + (Math.sqrt(number)));
}

function calculate_COS()
{
    var angle =parseFloat(prompt("Enter angle in degrees to calculate its Cos value:"));
    alert("COS of the angle provided is "+ (Math.cos(angle*Math.PI/180)).toFixed(4));
}

circleArea();
squareRoot();
calculate_COS();
