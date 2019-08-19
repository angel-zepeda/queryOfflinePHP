<?php
  function getConnection() {
    $db = "queryOffline";
    $server = "localhost";
    $password = "Angel_05";
    $user = "root";
    $link = mysqli_connect($server, $user, $password) or die ("No se ha podido conectar");
    $db = mysqli_select_db($link, $db) or die("No se ha podido conectar a la BD");
    return $link; 
  }
?>

