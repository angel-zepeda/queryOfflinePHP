<?php
  include('connection.php');
  $con = getConnection();
  // $name = $_POST['name'];
  $insert = $_POST['query'];
  $nuevo = mysqli_query($con, $insert) or die("Ups");
  $select = mysqli_query($con, "SELECT * FROM Task") or die("Ups");

  $fila = [];
  while ($columna = mysqli_fetch_assoc($select)) {
    $fila[] = $columna;
  }

  echo json_encode($fila);
?>

