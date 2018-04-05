var input = document.querySelectorAll("input");
var form = document.querySelector("form");

var errorText = document.getElementById("error");

errorText.style.display="none";

form.addEventListener("submit",function(event){
    for(i=0;i<input.length;i++){
        if(input[i].name=="username") var username = input[i].value;
        if(input[i].name=="password") var password = input[i].value;
    }
    var message="";
    if(username=="") message+="username required."
    if(password=="") message+="password required."
    if(message!="") event.preventDefault();
    errorText.innerHTML=message;
    errorText.style.display="block";
});
