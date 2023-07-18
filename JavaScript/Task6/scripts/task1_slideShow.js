var i = 1;

function next() {
    if (i < 7) {
        document.getElementById("photo").src="../SlideShow/" + i + ".jpg";
        i++;
    }
}

var interval;
function slideShow() {
    interval = setInterval(function () {
        if (i == 7) {
            i = 1;
        }
        document.getElementById("photo").src="../SlideShow/" + i + ".jpg";
        i++;
    }, 500)
}

function stop() {
    clearInterval(interval);
}

function previous() {
    if (i > 1) {
        i--;
        document.getElementById("photo").src="../SlideShow/" + i + ".jpg";
    }
}