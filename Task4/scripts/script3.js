var myWin;

function openWin() {
    myWin = window.open("../pages/task3child.html", "", "width=200, height=300")
}

function closeWin() {
    if (myWin) {
        myWin.close();
    }
}

function moveWinTo() {
    myWin.moveTo(55, 70);
    myWin.focus();
}


function moveWinBy() {
    myWin.moveBy(100, 38);
    myWin.focus();
}