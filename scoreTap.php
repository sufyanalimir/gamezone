<<<<<<< HEAD
<?php

$a = explode("-", $_POST['score']);
echo "uid: $a[0]";
echo "score: $a[1]";
echo "<br>time: $a[2]";

$conn = mysqli_connect('localhost', 'root', '', 'gamezone');
$query = "INSERT INTO fast_tap VALUES($a[0], $a[1], $a[2]);";

if($a[1]!=0)    $result = mysqli_query($conn, $query);
if($result) header("location:FastTap.html?id=$a[0]");

=======
<?php

$a = explode("-", $_POST['score']);
echo "uid: $a[0]";
echo "score: $a[1]";
echo "<br>time: $a[2]";

$conn = mysqli_connect('localhost', 'root', '', 'gamezone');
$query = "INSERT INTO fast_tap VALUES($a[0], $a[1], $a[2]);";

if($a[1]!=0)    $result = mysqli_query($conn, $query);
if($result) header("location:FastTap.html?id=$a[0]");

>>>>>>> 39a93edd3bf591622c05fab56f88b230231e75e3
?>