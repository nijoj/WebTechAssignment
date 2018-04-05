<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Logout</title>
</head>
<body>
    <?php
        if($_COOKIE["auth"]=="true"){
            setcookie("auth","",time()-100);
            echo "you are logged out";
        }
        else echo "you are already logged out";
    ?>
    <a href="index.html"><button type="button">Back</button></a>
</body>
</html>