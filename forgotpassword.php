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
if($postjson['aksi']=='frgtpasswrd'){
// $adminid=$row['id'];
// $cpassword=md5($postjson['password']);
$newpassword=md5($postjson['Newpassword']);
$query=mysqli_query($con,"select id from register where id='87'");
$row=mysqli_fetch_array($query);
if($row>0){
$ret=mysqli_query($con,"update register set password='$newpassword' where id='87'");
echo "Password reset successfully";   
} else {
echo "Your current password is wrong";   

}
}
  
  
  ?>
  