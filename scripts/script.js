var login = document.getElementById("login");
var signup = document.getElementById("signup");
var regbtn = document.querySelector(".reg_main-btn");
var close = document.getElementById("close");

var loginBack = document.querySelector(".reg-back");

var username;
var password;

var errorText =document.querySelector(".reg-back p");
var userText=document.getElementById("usertext");

loginBack.classList.add("display");
userText.classList.add("display");

var userData = new Object();

function addUser(userName,password){
    var result = searchUser(userName);
    if(!result){
        if(username==""||password==""){
            errorText.innerHTML="Fields cannot be blank";
        }
        else{
        userData[userName]=password;
        errorText.innerHTML="User added"
        }
    }
    else{
        errorText.innerHTML="User exsists / cant be added"
    }
    errorText.classList.remove("display")
};
function checkUser(userName,password){
    var result = searchUser(userName)
    if(!result){
        errorText.innerHTML="invalid password/username";
    }
    else if(result!=password){
        errorText.innerHTML="invalid password/username";
    }
    else{
        loginBack.classList.add("display");
        userText.innerHTML="Hi, "+userName;
        login.classList.add("display");
        signup.classList.add("display");
        userText.classList.remove("display");
    }
    errorText.classList.remove("display");
};
function searchUser(userName){
    if(userData[userName]==undefined) return false;
    return userData[userName];
};
function getUser(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
};
function clearValue(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
};
signup.addEventListener("click",function(){
    clearValue();
    errorText.classList.add("display");
    regbtn.removeEventListener("click",loginfunc);
    loginBack.classList.remove("display");
    regbtn.innerHTML="Sign up";
    regbtn.addEventListener("click",signupfunc);
});
function signupfunc(){
    getUser();
    addUser(username,password);
};
login.addEventListener("click",function(){
    clearValue();
    errorText.classList.add("display");
    regbtn.removeEventListener("click",signupfunc);
    loginBack.classList.remove("display");
    regbtn.innerHTML="Login";
    regbtn.addEventListener("click",loginfunc);
});
function loginfunc(){
    getUser();
    checkUser(username,password);
}
close.addEventListener("click",function(){
    loginBack.classList.add("display");
});