function change(){

    if(document.getElementById("input1").value.match(/^[a-zA-Z]{3,}$/) && document.getElementById("input2").value.match(/^[a-zA-Z0-9]+[@][a-zA-Z]+(.com){1}$/)){
        alert("Your input is right!");
    }else{
        alert("Your input is wrong!");
    }  
}