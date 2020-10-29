<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');
include "dbconnect.php"; 
$postjson = json_decode(file_get_contents('php://input'), true);
$today = date('Y-m-d');
$message=array(); 
$q=mysqli_query($con, "SELECT * FROM `burgger` "); 

while ($row=mysqli_fetch_object($q)){
   // $data[]=$row;
array_push($message,array("results"=>$row)); 
}

echo json_encode($message); 
echo mysqli_error($con); 