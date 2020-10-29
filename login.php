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
session_start();
if($postjson['aksi']=="login"){
    $adminuser=$postjson['email'];
    $password=md5($postjson['password']);
	$query= "select * from register where  email='$adminuser' && password='$password' ";
	    $result = mysqli_query($con,$query);
    if(mysqli_num_rows($result)>0){
	while ($row = mysqli_fetch_assoc($result)){
		
	array_push($message,array("result"=>$row)); 
 $response=  "Successfully Login";
}
}
    else{
         $response= "Invalid username or password";    
    }
    echo json_encode($response); 
  }
  ?>