var input = document.querySelectorAll("input");
var form = document.querySelector("form");

var errorText = document.getElementById("error");

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneRegExp = /[0-9]{10}/;

errorText.style.display="none";

form.addEventListener("submit",function(event){
    for(i=0;i<input.length;i++){
        if(input[i].name=="username") var username = input[i].value;
        if(input[i].name=="password") var password = input[i].value;
        if(input[i].name=="email") var email = input[i].value;
        if(input[i].name=="phone") var phone = input[i].value;
    }
    var message="";
    if(username=="") message+="username required</br>"
    if(password=="") message+="password required</br>"
    if(document.title=="Sign Up"){
        if(!emailRegExp.test(email)) message+="email invalid</br>"
        if(!phoneRegExp.test(phone)) message+="phone number invalid"
    }
    if(message!="") event.preventDefault();
    errorText.innerHTML=message;
    errorText.style.display="block";
});
