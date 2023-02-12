<<<<<<< HEAD
<?php
    $uid = $_POST['uid'];

echo'
<html>
    <head>
        
    </head>
    <body>
        <form action="userDetails.php" method="post">
            <label>Uid</label>&nbsp; <input type="text" name="uid" id="uid" value='.$uid.' readonly/>
            <input type="submit" name="viewScore" value="View Score" />
        </form><button id="logout" onclick="logout()">LogOut</button><br><br>
        <a href="FastTap.html?id='.$uid.'" target="gameFrame">FastTap</a>&nbsp;
        <a href="FastMath.html?id='.$uid.'" target="gameFrame">FastMath</a>&nbsp;
        <a href="TicTacToe.html?id='.$uid.'" target="gameFrame">TicTacToe</a>&nbsp;<br><br>
        <iframe name="gameFrame" srcdoc="Select A game" frameborder="0" height="100%" width="100%"></iframe>

        <script type="text/javascript">
            function logout(){
                location.href="Login.html";
            }
        </script>
    </body>
</html>
'

=======
<?php
    $uid = $_POST['uid'];

echo'
<html>
    <head>
        
    </head>
    <body>
        <form action="userDetails.php" method="post">
            <label>Uid</label>&nbsp; <input type="text" name="uid" id="uid" value='.$uid.' readonly/>
            <input type="submit" name="viewScore" value="View Score" />
        </form><button id="logout" onclick="logout()">LogOut</button><br><br>
        <a href="FastTap.html?id='.$uid.'" target="gameFrame">FastTap</a>&nbsp;
        <a href="FastMath.html?id='.$uid.'" target="gameFrame">FastMath</a>&nbsp;
        <a href="TicTacToe.html?id='.$uid.'" target="gameFrame">TicTacToe</a>&nbsp;<br><br>
        <iframe name="gameFrame" srcdoc="Select A game" frameborder="0" height="100%" width="100%"></iframe>

        <script type="text/javascript">
            function logout(){
                location.href="Login.html";
            }
        </script>
    </body>
</html>
'

>>>>>>> 39a93edd3bf591622c05fab56f88b230231e75e3
?>