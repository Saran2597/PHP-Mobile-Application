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
if($postjson['aksi']=="updateprofile"){
  // $oldpassword=($postjson['email']);
  $sql=mysqli_query($con,"select id from register where id='83'");
  $num=mysqli_fetch_array($sql);
if($num>0){
  $fname=$postjson['f_name'];
  $lname=$postjson['last_name'];
  $mobilenumber=$postjson['mobile_number'];
   $ret=mysqli_query($con,"update register set f_name='$fname',last_name='$lname', mobile_number='$mobilenumber' where id='83'");
   echo "profile updated successfully";     //header('location:user.php');
  }
  echo mysqli_error($con); 
}
  ?>