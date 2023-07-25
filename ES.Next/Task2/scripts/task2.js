var band;

function getArtists(){
    var selectedBand=document.getElementById("Band").value;
     //1) Create XHR
     var xhr = new XMLHttpRequest();
        
     //2) Connect [Open Connection]
     xhr.open("GET","../data/data.json");
     
     //3)send
     xhr.send('');
     
     //4) Listner [onreadystatechange]
     xhr.onreadystatechange = function(){
         if(xhr.readyState == 4){
             if(xhr.status == 200){
                var ArtistList = document.getElementById("Artist");
                
                ArtistList.innerHTML = ""; 
                for (let i in JSON.parse(xhr.responseText)){
                    if(i==selectedBand)
                    {
                        console.log(i);
                        band= JSON.parse(xhr.responseText)[i]; //subscribtor notation
                        console.log(band);
                        for(let s = 0 ; s<band.length ; s++){
                            ArtistList.innerHTML += "<option>"+band[s].name+"</option>"
                        }
                    }
                }
                // if(selectedBand=="beatles"){
                //     // console.log(JSON.parse(xhr.responseText)); //[{},{},{},{}]
                //     band= JSON.parse(xhr.responseText).beatles;
                //     for(let i = 0; i<band.length;i++){
                //         ArtistList.innerHTML += "<option>"+band[i].name+"</option>"
                //     }
                // }
                // else if(selectedBand=="stones"){
                //     // console.log( JSON.parse(xhr.responseText).stones);  //[{},{},{},{}]
                //     band= JSON.parse(xhr.responseText).stones;
                //     for(let i = 0; i<band.length;i++){
                //         ArtistList.innerHTML += "<option>"+band[i].name+"</option>"
                //     }
                // }
                // else if(selectedBand=="genesis"){
                //     // console.log( JSON.parse(xhr.responseText).genesis);  //[{},{},{},{}]
                //     band= JSON.parse(xhr.responseText).genesis;
                //     for(let i = 0; i<band.length;i++){
                //         ArtistList.innerHTML += "<option>"+band[i].name+"</option>"
                //     }
                // }

                // else if(selectedBand=="eagles"){
                //     // console.log( JSON.parse(xhr.responseText).eagles);  //[{},{},{},{}]
                //     band= JSON.parse(xhr.responseText).eagles;
                //     for(let i = 0; i<band.length;i++){
                //         ArtistList.innerHTML += "<option value="+band[i].name+">"+band[i].name+"</option>"
                //     }
                // }
             }
         }
     }
}

function openWebsite(){
    var selectedArtist=document.getElementById("Artist").selectedIndex;
    window.location.href=band[selectedArtist].value;
    //window.open(band[selectedArtist].value); // open in new tab
}