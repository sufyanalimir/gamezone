<?php
    $uid = $_POST['uid'];

echo'
<html>
    <head>
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/home.css">
    </head>
    <body>
        <div class="header-group">
            <form action="userDetails.php" method="post">
                <div>
                    <label>UID</label>&nbsp; <input type="text" name="uid" id="uid" value='.$uid.' readonly/>
                </div>
                <input type="submit" name="viewScore" value="View Score" />
            </form>
            <div class="logout-btn">
                <button id="logout" onclick="logout()">Log Out</button><br><br>
            </div>
        </div>
        <div class="game-links">
            <div>
                <a href="FastTap.html?id='.$uid.'" target="gameFrame">Fast Tap</a>&nbsp;
                <a href="FastMath.html?id='.$uid.'" target="gameFrame">Fast Math</a>&nbsp;
                <a href="TicTacToe.html?id='.$uid.'" target="gameFrame">Tic Tac Toe</a>&nbsp;<br><br>
            </div>
            <div>
                <p>SELECT A GAME</p>
            </div>
        </div>
        <iframe name="gameFrame" frameborder="0" height="100%" width="100%"></iframe>

        <script type="text/javascript">
            function logout(){
                location.href="Login.html";
            }
        </script>
    </body>
</html>
'

?>