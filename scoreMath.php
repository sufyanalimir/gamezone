<?php

$a = explode("-", $_POST['data']);
$uid = $a[0];
$diff = $a[1];
$time = $a[2];
$score = $a[3];
$conn=mysqli_connect('localhost', 'root', '', 'gamezone');
if($score!=0){
    $query="INSERT INTO fast_math VALUES($uid, '".$diff."', $time, $score);";
    $res = mysqli_query($conn, $query);
    if($res) header("location:FastMath.html?id=$uid");
}

?>