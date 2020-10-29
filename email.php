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
if($postjson['aksi']=='sendemail')
{
	$email=$postjson['email'];
 $fromAddr='PHP Gurukul Programing Blog <www.phpgurukul.com>'; // the address to show in From field.
 $recipientAddr = $postjson['email'];
 $subjectStr = 'Subject';

$mailBodyText = <<<HHHHHHHHHHHHHH
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<title>Demo From Website</title>
</head>
<body>
<table>
<tr>
<td style="width:150px;"><b>Subject:</b></td>
<td><b>:</b></td>
<td style="text-transform:capitalize;">HELLO FOODZ</td>
</tr>
<tr>
<td><b>Message</b></td>
<td><b>:</b></td>
<td style="text-transform:capitalize;">I am  Saran Raj</td>
</tr>

</table>
</body>
</html>
HHHHHHHHHHHHHH;

$headers= <<<TTTTTTTTTTTT
From: $fromAddr
MIME-Version: 1.0
Content-Type: text/html;
TTTTTTTTTTTT;

mail($recipientAddr,$subjectStr,$mailBodyText,$headers);
//echo "($recipientAddr,$subjectStr,$mailBodyText,$headers)";
//$_SESSION['msg']="Your Information has been send sucessfully...";
echo "send succesfully";
}
?>
