<?php
require './MySqlDB.php';
if ($_SERVER['REQUEST_METHOD']==="DELETE") {
    $mySql =new MySqlDB();
$id=$_GET['ID'];
$mySql->torol("telefonkonyvem", "ID=".$id);
}
