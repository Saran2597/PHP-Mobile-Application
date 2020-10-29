<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');
include "dbconnect.php"; 
$postjson = json_decode(file_get_contents('php://input'), true);
$today = date('Y-m-d');
$message = array(); 
if($postjson['aksi'] == "delete"){
  $row_id = $postjson['id'];
$sql = "DELETE FROM Address WHERE id='$row_id'";
if(mysqli_query($con, $sql)){
    echo "Address deleted successfully.";
} else{
    echo "ERROR: Could not able to execute";
}
}


echo mysqli_error($con); 
?>