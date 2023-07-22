function saveData() { 

var nameInput = document.getElementById("uname").value;
var ageInput = document.getElementById("uage").value;
var addressInput = document.getElementById("uaddress").value;
var GenderInput = document.getElementById("ugender").value;
var emailInput = document.getElementById("uemail").value;
var mobileInput = document.getElementById("umobile").value;

localStorage.setItem("Name",nameInput);
localStorage.setItem("Age",ageInput);
localStorage.setItem("Address",addressInput);
localStorage.setItem("Gender",GenderInput);
localStorage.setItem("Email",emailInput);
localStorage.setItem("Mobile",mobileInput);

}