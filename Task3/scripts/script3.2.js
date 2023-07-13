do {
    var Uname = prompt("Enter your name:");
} while (! /^[a-zA-Z]+$/.test(Uname))

do {
    var phone = prompt("Enter your phone number: ")
} while (! /^[0-9]{8}$/.test(phone))

do {
    var mobileNum = prompt("Enter your mobile number: ");
} while (! /^(01)[0-2]{1}[0-9]{8}$/.test(mobileNum))

do {
    var Email = prompt("Enter your Email address: ");
} while (! /^[a-zA-Z0-9]+[@][a-zA-Z]+(.com){1}$/.test(Email))

document.write("<h1> entering user info </h1>");
document.write("<hr/>");
document.write("<h3> Welcome dear guest: " + Uname + "</h3>");
document.write("<h3> your telephone number is: " + phone + "</h3>");
document.write("<h3> your mobile number is: " + mobileNum + "</h3>");
document.write("<h3> your email address is:" + Email + "</h3>");