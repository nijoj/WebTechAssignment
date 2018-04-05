<?php
    $message="";
    $response='<form>
            <label>User name <input type="text" name="username"></label>
            <label>Password <input type="password" name="password"></label>';
    if($_COOKIE["auth"]=="true"){
        echo "user already logged in";
        exit(0);
    }
    else if($_SERVER["REQUEST_METHOD"]=="POST"){
        $db = mysqli_connect("localhost","gallery","password","gallery");
        if(mysqli_connect_errno()){
            printf("Connection failed %s<br/>",mysqli_error());
            exit();
        }
        
        $query = "SELECT * from userdata";
        $result = mysqli_query($db,$query);

        // extract post req and search for username
        $username = $_POST["username"];
        $back=search_db($result,$username);

        if($_POST["type"]=="login"){

            //if found set cookie and set message
            if($back&&$back["password"]==$_POST["password"]){
                setcookie("auth","true",time()+86400,"/");
                setcookie("username",$back["username"],time()+86400,"/");
                $message="successfully logged in";
            }
            else{
                $message="user not found / password invalid";
            }
        }
        if($_POST["type"]=="signup"){
                
            if($back){
                $message = "user already exist";
            }
            else{
                $password = $_POST["password"];
                $email = $_POST["email"];
                $phone = $_POST["phone"];
                
                $query = "INSERT INTO userdata (username, password, email, phone)
                        VALUES ('$username', '$password', '$email', '$phone')";
                $result = mysqli_query($db,$query);
                if($result) $message="user added";
            }
        }
    }
    if($_GET["q"]=="signup"||$_POST["type"]=="signup"){
        $response.='<label>Email <input type="email" name="email"></label>
            <label>Phone <input type="number" name="phone"></label>';
    }
    $response.='<input type="submit" value="Login">
        <a href="index.html"><button type="button">Back</button></a>
        </form>
        <p id="error" style="color:red; text-align:center;">'."$message</p>";
    echo $response;
    function search_db($result,$username){
        while($row = mysqli_fetch_assoc($result)){
            if($username==$row["username"]){
                return $row;
            }
        }
        return false;
    } 
?>