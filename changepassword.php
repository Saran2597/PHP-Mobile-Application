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
if($postjson['aksi']=='changepassword'){
$useremail=$_SESSION['id'];
$cpassword=md5($postjson['Currentpassword']);
$newpassword=md5($postjson['Newpassword']);
$query ="select id from register where id='$useremail' and password='$cpassword'";
  $result = mysqli_query($con,$query);
if(mysqli_num_rows($result)>0){
$ret=mysqli_query($con,"update register set password='$newpassword' where id='$useremail'");
array_push($message,array("result"=>$ret));
 $response= "Password successfully";   
} else {
 $response= "Your current password is wrong";   

}
 echo json_encode($response); 
}
?> 