
//#region  blur

// make the photo blur on mouseover
// make the photo normal on mouseout

var photo = document.getElementById("img");
photo.addEventListener("mouseover", function () {
    photo.style.filter = "blur(3px)";
}
, false);
photo.addEventListener("mouseout", function () {
    photo.style.filter = "blur(0px)";
}
, false);

//#endregion

//decrease the opacity of the photo on mouseover
//increase the opacity of the photo on mouseout
var photo = document.getElementById("img");
photo.addEventListener("mouseover", function () {
    photo.style.opacity = "0.7";
}
, false);
photo.addEventListener("mouseout", function () {
    photo.style.opacity = "1";
}
, false);

