

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
if($postjson['aksi'] =="add_register"){
	$fname=$postjson['f_name'];
 	$lname=$postjson['last_name'];
 	$email=$postjson['email'];
 	$password=md5($postjson['password']);
     $contact=$postjson['mobile_number'];
  
 $sql=mysqli_query($con,"select id from register where email='$email'");
 $row=mysqli_num_rows($sql);
 if($row>0){
 	echo "Email Id and Mobile Number are already exist with another account. Please try with other email id";
 } else{
 	$ret=mysqli_query($con,"INSERT into register(f_name,last_name,email,password,mobile_number) values('$fname','$lname','$email','$password','$contact')");
 	if($ret>0){
 		$_SESSION['aid']=$ret['id'];
 		$message['status'] = "Registerd successfully"; 
 	  }
 	  else{
 		$message['status'] = "Invalid username or password"; 
 	  } 
 echo json_encode($message); 
 }

 echo mysqli_error($con); 
 }

?>