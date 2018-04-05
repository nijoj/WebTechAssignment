var login = document.getElementById("login");
var signup = document.getElementById("signup");
var regBack=document.querySelector(".reg-back");

var xhttp = new XMLHttpRequest();

login.addEventListener("click",function(){
    regBack.style.display="flex";
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".form-wrap").innerHTML = this.responseText;
            validator();
        }
    };
    xhttp.open("GET", "php\\reg.php", true);
    xhttp.send();
});

signup.addEventListener("click",function(){
    regBack.style.display="flex";
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".form-wrap").innerHTML = this.responseText;
            validator(true);
        }
    };
    xhttp.open("GET", "php\\reg.php?q=signup", true);
    xhttp.send();
});

function validator(signup){
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
        if(username=="") message+="username required</br>";
        if(password=="") message+="password required</br>";
        if(signup){
            if(!emailRegExp.test(email)) message+="email invalid</br>";
            if(!phoneRegExp.test(phone)) message+="phone number invalid";
        }
        event.preventDefault();
        if(message!=""){ 
            errorText.innerHTML=message;
        }
        else if(signup){
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.querySelector(".form-wrap").innerHTML = this.responseText;
                    validator(true);
                }
            };
            xhttp.open("POST", "php\\reg.php?q=signup", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send('type=signup&username='+username+"&password="+password+"&email="+email+"&phone="+phone);
        }
        else{
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.querySelector(".form-wrap").innerHTML = this.responseText;
                    validator(true);
                }
            };
            xhttp.open("POST", "php\\reg.php?q=signup", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send('type=login&username='+username+"&password="+password);
        }
    });
    errorText.style.display="block";
}