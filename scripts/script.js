var login = document.getElementById("login");
var loginBtn = document.getElementById("login-btn");
var close = document.getElementById("close");

var loginBack = document.querySelector(".login-back");

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

var incorrectText=document.querySelector(".login-back p");
var userText=document.getElementById("usertext");

loginBack.classList.add("display");
incorrectText.classList.add("display");
userText.classList.add("display");

login.addEventListener("click",function(){
    loginBack.classList.remove("display");
});
close.addEventListener("click",function() {
   loginBack.classList.add("display"); 
});
loginBtn.addEventListener("click",function(){
    if(username=="hello"&&password=="world"){
        userText.innerHTML="Hi,hello";
        userText.classList.remove("display");
        login.classList.add("display");
        loginBack.classList.add("display");
    }
    else{
        incorrectText.classList.remove("display");
    }
});