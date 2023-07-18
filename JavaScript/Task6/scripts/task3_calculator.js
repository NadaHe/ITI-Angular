var num1 = 0;
var operator = "";
var num2 = 0;
var result = 0;

function funNums(myButton){
    document.getElementById("result").value += myButton.value;
}

function ClearData(){
    document.getElementById("result").value = "";
}

function decimal() {
	var output = document.getElementById("result");
	if (output.value.indexOf(".") == -1) {
		output.value += ".";
	}
}

function add() {
	var output = document.getElementById("result");
	num1 = parseFloat(output.value);
	operator = "+";
	output.value = "";
}

function subtract() {
	var output = document.getElementById("result");
	num1 = parseFloat(output.value);
	operator = "-";
	output.value = "";
}

function multiply() {
	var output = document.getElementById("result");
	num1 = parseFloat(output.value);
	operator = "*";
	output.value = "";
}

function divide() {
	var output = document.getElementById("result");
	num1 = parseFloat(output.value);
	operator = "/";
	output.value = "";
}

function equals() {
	let output = document.getElementById("result");
	num2 = parseFloat(output.value);
	if (operator == "+") {
		result = num1 + num2;
	} else if (operator == "-") {
		result = num1 - num2;
	} else if (operator == "*") {
		result = num1 * num2;
	} else if (operator == "/") {
		result = num1 / num2;
	}
	output.value = result.toString();
	num1 = 0;
	operator = "";
	num2 = 0;
	result = 0;
}


		

