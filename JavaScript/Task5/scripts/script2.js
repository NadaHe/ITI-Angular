var ArrayKeyValue = location.search.substring(1).split("&");//["?uname=Ahmed","uage=20"]
var Values = [];
for (var i = 0; i < ArrayKeyValue.length; i++) {
    var Key = ArrayKeyValue[i].split("=")[0];//?uname
    var val = ArrayKeyValue[i].split("=")[1];
    Values[Key] = val;
}

document.write(
    "<h1>Welcome Ya " + Values["uname"] + "</h1>"
    + "<h1>Ur Age: " + Values["uage"] + "</h1>"
    + "<h1>Ur Address: " + Values["uaddress"] + "</h1>"
    + "<h1>Ur Gender: " + Values["ugender"] + "</h1>"
    + "<h1>Ur Email: " + Values["uemail"].replace("%40","@") + "</h1>"
    + "<h1>Ur Mobile: " + Values["umobile"] + "</h1>"
)
