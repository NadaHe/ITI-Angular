var choose = confirm("Do you need to consider case senstivity? ");

var input = prompt("Enter a string: ");

function palindrome() {
    if (choose == false) {
        input = input.toLowerCase();
    }
    var reverse_string = input.split("").reverse().join("");

    if (input == reverse_string) {
        alert("A palindrome");
    } else {
        alert("Not a palindrome");
    }
}
palindrome();

