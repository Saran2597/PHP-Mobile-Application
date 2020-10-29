<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
header('Access-Control-Allow-Headers: *');
$con = mysqli_connect("localhost", "root", "", "Login") 
or die("could not connect DB"); 
echo "Connected";
?>