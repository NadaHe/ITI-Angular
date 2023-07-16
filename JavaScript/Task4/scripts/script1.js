function sortingArray() {
    var array = new Array();
    for (var i = 0; i < 5; i++) {
        var input = prompt("enter a value: ");
        array[i] = input;
    }
    document.write("<h3> u've entered the values of : " + array + "</h3>");
    document.write("<h3> ur values after being sorted descendingly: " + array.sort(function (a, b) { return a - b; }) + "</h3>");
    document.write("<h3>ur values after being sorted ascendingly: " + array.sort(function (a, b) { return b - a; }) + "</h3>");
}

sortingArray();