<<<<<<< HEAD
<?php
    $conn=mysqli_connect('localhost', 'root', '', 'gamezone');
    $uid = $_POST['uid'];
    $psrd = $_POST['prd'];
    $query = "SELECT psrd FROM login WHERE uid=$uid;";
    $res = mysqli_query($conn, $query);
    if($psrd == mysqli_fetch_row($res)[0]){
        echo'
            <form id="formUID" action="Home.php" method="POST">
                <input type="number" name="uid" value='.$uid.' />
            </form>
            <script type="text/javascript">
                document.getElementById("formUID").submit();
            </script>
        ';
    }else{
        echo "userID or password is incorrect";
    };
    
=======
<?php
    $conn=mysqli_connect('localhost', 'root', '', 'gamezone');
    $uid = $_POST['uid'];
    $psrd = $_POST['prd'];
    $query = "SELECT psrd FROM login WHERE uid=$uid;";
    $res = mysqli_query($conn, $query);
    if($psrd == mysqli_fetch_row($res)[0]){
        echo'
            <form id="formUID" action="Home.php" method="POST">
                <input type="number" name="uid" value='.$uid.' />
            </form>
            <script type="text/javascript">
                document.getElementById("formUID").submit();
            </script>
        ';
    }else{
        echo "userID or password is incorrect";
    };
    
>>>>>>> 39a93edd3bf591622c05fab56f88b230231e75e3
?>