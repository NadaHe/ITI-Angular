function openWindow() {
    var string = "Hello World";
    var array = new Array();
    array = string.split("");

    var i = 0;

    myWin = window.open("../pages/letterByletter.html", "", "width=200, height=300")
    x = setInterval(function () {
        if (i < array.length) {
            myWin.document.write(array[i]);
            i++;
        } else {
            myWin.close()
        }
    }, 1000)
}
