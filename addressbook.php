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
if($postjson['aksi']=='add'){
  
    $add=$postjson['address'];
    $cty=$postjson['city'];
    $pin=$postjson['pincode'];
    $ste=$postjson['state'];
    $query=mysqli_query($con, "insert into  Address (address,state,city,pincode) value('$add','$cty','$ste','$pin')");
    if ($query) {
    $msg="Address added sucessfully";
  }
  else
    {
      $msg="Something Went Wrong. Please try again";
    }

    echo json_encode($msg); 
}

echo mysqli_error($con); 

?>