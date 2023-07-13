document.write("<h1>Heading</h1>")
document.write("<hr/>")

var input = prompt("enter a message please")

for (var i = 1; i < 7; i++) {
    document.write("<h" + i + ">"+ input + i + "</h" + i + ">");
}