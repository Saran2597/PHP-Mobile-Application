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
$status=$postjson["status"];
$firstname=$postjson["firstname"];
$amount=$postjson["amount"];
$txnid=$postjson["txnid"];
$posted_hash=$_POST["hash"];
$key=$_POST["key"];
$productinfo=$postjson["productinfo"];
$email=$postjson["email"];
$salt="fpuCRcpgoK";

// Salt should be same Post Request 

If (isset($postjson["additionalCharges"])) {
       $additionalCharges=$postjson["additionalCharges"];
        $retHashSeq = $additionalCharges.'|'.$salt.'|'.$status.'|||||||||||'.$email.'|'.$firstname.'|'.$productinfo.'|'.$amount.'|'.$txnid.'|'.$key;
  } else {
        $retHashSeq = $salt.'|'.$status.'|||||||||||'.$email.'|'.$firstname.'|'.$productinfo.'|'.$amount.'|'.$txnid.'|'.$key;
         }
		 $hash = hash("sha512", $retHashSeq);
       if ($hash != $posted_hash) {
	       echo "Invalid Transaction. Please try again";
		   } else {
                  $query= "INSERT into paymentstatus(firstname,email,amount,productinfo,txnid) values('$firstname','$amount','$email','$productinfo','$txnid')";
             if(mysqli_query($con,$query)){
                  echo "Payment details saved successfully in our database";
                  echo "$productinfo";
             }
                  echo "<h3>Thank You. Your order status is ". $status .".</h3>";
          echo "<h4>Your Transaction ID for this transaction is ".$txnid.".</h4>";
          echo "<h4>We have received a payment of Rs. " . $amount . ". Your order will soon be shipped.</h4>";
               }
            
?>	