var login = document.getElementById("login");
var signup = document.getElementById("signup");
var regbtn = document.querySelector(".reg_main-btn");
var close = document.getElementById("close");

var loginBack = document.querySelector(".reg-back");
var regDiag = document.querySelector(".reg-diag");

var username;
var password;
var confirm;
var email;
var phone;

var errorText =document.querySelector(".reg-back p");
var userText=document.getElementById("usertext");

var signExtra = document.getElementById("sign-ext");

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneRegExp = /[0-9]{10}/;

loginBack.classList.add("display");
userText.classList.add("display");
signExtra.style.display="none";

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
    document.getElementById("confirm").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
};
signup.addEventListener("click",function(){
    clearValue();
    signExtra.style.display="flex";
    regDiag.classList.add("signextra");
    errorText.classList.add("display");
    regbtn.removeEventListener("click",loginfunc);
    loginBack.classList.remove("display");
    regbtn.innerHTML="Sign up";
    regbtn.addEventListener("click",signupfunc);
});
function signupfunc(){
    getUser();
    confirm = document.getElementById("confirm").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    if(password!=confirm||password==""){
        errorText.innerHTML="Passwords dont match / invalid";
        errorText.classList.remove("display");
        return;
    }
    else if(!emailRegExp.test(email)){
        errorText.innerHTML="Please enter valid email";
        errorText.classList.remove("display");
        return;
    }
    else if(!phoneRegExp.test(phone)){
        errorText.innerHTML="Please enter valid phone number";
        errorText.classList.remove("display");
        return;
    }
    addUser(username,password);
};
login.addEventListener("click",function(){
    clearValue();
    signExtra.style.display="none";
    regDiag.classList.remove("signextra");
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