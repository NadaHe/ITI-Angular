onload=function(){

document.getElementById("play").addEventListener("click", function () {
    document.getElementById("video").play();
}   , false); 

document.getElementById("stop").addEventListener("click", function () {
    document.getElementById("video").pause();
}   , false);        

//add a feature to mute then toggle the mute button if it is clicked again if it is muted it will unmute it and vice versa
document.getElementById("mute").addEventListener("click", function () {
    if(document.getElementById("video").muted){
        document.getElementById("video").muted = false;
    }else{
        document.getElementById("video").muted = true;
    }
}   , false);

document.getElementById("startfromzero").addEventListener("click", function () {
    document.getElementById("video").currentTime = 0;
}, false);

document.getElementById("back").addEventListener("click", function () {
    document.getElementById("video").currentTime -= 5;
}, false);

document.getElementById("forward").addEventListener("click", function () {
    document.getElementById("video").currentTime += 5;
}, false);

document.getElementById("end").addEventListener("click", function () {
    document.getElementById("video").currentTime = document.getElementById("video").duration;
}, false);

document.getElementById("r1").setAttribute("max",document.getElementById("video").duration);
document.getElementById("r1").addEventListener("change",function(){
    //move back and forward on the scale
     document.getElementById("video").currentTime = document.getElementById("r1").value;
});

document.getElementById("r2").addEventListener("change",function(){
    // change the volum of the sound on the scale
    document.getElementById("video").volume = document.getElementById("r2").value;
});

document.getElementById("r3").addEventListener("change",function(){
    // change the speed of the video on the scale
    document.getElementById("video").playbackRate = document.getElementById("r3").value;
});

}




