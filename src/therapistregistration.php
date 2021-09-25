<?php
$connection = mysqli_connect("localhost","root","","therapist registration");
$db = mysqli_select_db($connection,'therapists');

if(isset($_POST['register']))
{
    $file = addslashes(file_get_contents($_FILES["image"]["tmp_name"]));
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $file = addslashes(file_get_contents($_FILES["cv"]["tmp_name"]));
    $query = "insert into therapists values('','$file','$name','$email','$password','$file')";

    $query_run = mysqli_query($connection,$query);

    if($query_run){
        echo '<script type="text/javascript">alert("Your Registration is Done!")</script>';
    }
    else {
        echo '<script type="text/javascript">alert("Your Registration is not Done<br>Try again...")</script>';
    }
    
}
?>