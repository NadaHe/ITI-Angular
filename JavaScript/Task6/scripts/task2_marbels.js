var i = 0;

function Marbel() {
    var images = document.querySelectorAll(".marble");

    x = setInterval(function () {
        if (i == images.length - 1) {
            images[i].src = "../Images/marble1.jpg";
        } else {
            images[i].src = "../Images/marble3.jpg";
        }
        setTimeout(function () {
            if (i == images.length - 1) {
                images[i].src = "../Images/marble3.jpg";
            }
            images[i - 1].src = "../Images/marble1.jpg";
        }, 500);
        if (i >= images.length - 1) {
            i = 0;
            images[i].src = "../Images/marble3.jpg";
        }
        i++;
    }, 1000);
}

function mouseOver() {
    clearInterval(x);
}

function mouseOut() {
    Marbel();
}

Marbel();