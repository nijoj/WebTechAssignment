var login = document.getElementById("login");
var signup = document.getElementById("signup");

var regBack=document.querySelector(".reg-back");

var xhttp = new XMLHttpRequest();


login.addEventListener("click",function(){
    regBack.style.display="flex";
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".form-wrap").innerHTML = this.responseText;
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
        }
    };
    xhttp.open("GET", "php\\reg.php", true);
    xhttp.send();
});