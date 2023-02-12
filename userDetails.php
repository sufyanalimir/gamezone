<html>
    <head>
        <title>Game Zone</title>
        <link rel="stylesheet" href="./assets/css/main.css">
        <link rel="stylesheet" href="./assets/css/user-deatils.css">
    </head>
    <body>
    <?php
        $conn = mysqli_connect('localhost', 'root', '', 'gamezone');
        $uid = $_POST['uid'];

        if(isset($_POST['viewScore'])){
            $query = "SELECT uname, psrd FROM login WHERE uid=$uid;";
            $res = mysqli_query($conn, $query);
            $res = mysqli_fetch_row($res);
            
            echo'<form class="user-form" action="" method="POST">
                    <input type="text" name="uid" value=$uid hidden />
                    <label>Name</label>
                    <input type="text" name="uname" value='.$res[0].'>
                    <label>Password</label>
                    <input type="password" name="prd" value='.$res[1].'>
                    <input type="submit" name="update" value="Update"/>
                </form>
            ';

        }

        if(isset($_POST['update'])){
            $uid = $_POST['uid'];
            $name = $_POST['uname'];
            $prd = $_POST['prd'];
            $query = "UPDATE login SET uname='".$name."', psrd='".$prd."' WHERE uid=$uid";
            $res = mysqli_query($conn, $query);
            if($res) echo "data updated login again to continue";
        }

        echo"
            <table border=1 cellspacing=20>
                <tr>
                    <th colspan=2>FastTap</th>
                </tr>
                <tr>
                    <th>time</th>
                    <th>score</th>
                </tr>
        ";
        $query = "SELECT time_limit, score FROM fast_tap WHERE uid=$uid;";
        $res = mysqli_query($conn, $query);
        while($data=mysqli_fetch_array($res)){
            echo '
                <tr>
                    <td>'.$data[0].'</td>
                    <td>'.$data[1].'</td>
                </tr>';
        }
        echo"</table>";

        echo"
            <table border=1 cellspacing=20>
                <tr>
                    <th colspan=3>Fast Math</th>
                </tr>
                <tr>
                    <th>difficulty</th>
                    <th>time</th>
                    <th>score</th>
                </tr>
        ";
        $query = "SELECT diff, time_limit, score FROM fast_math WHERE uid=$uid;";
        $res = mysqli_query($conn, $query);
        while($data=mysqli_fetch_array($res)){
            echo'
                <tr>
                    <td>'.$data[0].'</td>
                    <td>'.$data[1].'</td>
                    <td>'.$data[2].'</td>
                </tr>';
        }
        echo"</table>";


    ?>
    </body>
</html>