<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');
include "dbconnect.php"; 
$postjson = json_decode(file_get_contents('php://input'), true);
$today = date('Y-m-d');
$msg = array(); 
if($postjson['aksi']=='add_register'){
  
    $prodtitle=$postjson['title'];
    $proddiscription=$postjson['discription'];
    $prodprice=$postjson['price'];
    $query=mysqli_query($con, "insert into  list (title,discription,price) value('$prodtitle','$proddiscription','$prodprice')");
    if ($query) {
    $msg="Category has been added.";
  }
  else
    {
      $msg="Something Went Wrong. Please try again";
    }

    echo json_encode($msg); 
}

echo mysqli_error($con); 

?>
