<!DOCTYPE html>
<?php
include 'libs/load.php';

$result=true;
if(logincheck::loggedin()){
  $result=false;
}
if(!$result){
?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body><?
  header('location:/contact.php');
  ?>
</body>
</html>
<?
}else{
    header('location:/login.php');
}
?>