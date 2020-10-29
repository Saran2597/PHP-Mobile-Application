<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');
include "dbconnect.php"; 
	/*Enter your API_KEY*/
	define("API_KEY", 'OPllEm9X02k-cGOvCAFGQgggk7PY8WzRI564YTKSUw');

	/*You can enter mobile number here*/
	define("MOBILE", '');
 ?>