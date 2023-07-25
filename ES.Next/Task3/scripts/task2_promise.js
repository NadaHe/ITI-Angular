   //1) Create XHR
   var xhr = new XMLHttpRequest();
        
   //2) Connect [Open Connection]
   xhr.open("GET","https://jsonplaceholder.typicode.com/users");
   
   //3)send
   xhr.send('');
   
   //4) Listner [onreadystatechange]
   xhr.onreadystatechange = function(){
    var promise=new Promise(function(resolve,reject)
    {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                resolve(xhr.responseText);
            }
            else{
                reject("error");
            }
        }
    } );
    promise.then(data=>console.log(data)).catch(error=>console.log(error));
}