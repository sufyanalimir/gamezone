<?php
    $conn=mysqli_connect('localhost', 'root', '', 'gamezone');
    //if($conn) echo "connected";
    //echo '<br>'.$_POST['uname'].'<BR>'.$_POST['prd'];
    
    $query = "INSERT INTO login (uname, psrd) VALUES('".$_POST['uname']."', '".$_POST['prd']."');";
    $result = mysqli_query($conn, $query);
    if($result){
        $query = "SELECT uid FROM login ORDER BY uid DESC LIMIT 1;";
        $result = mysqli_query($conn, $query);
        echo "Your id is: ".mysqli_fetch_row($result)[0]."<br>Login again to continue";
    }
    
    /*
    header('Location: Home.html');
    die();
    */
?>