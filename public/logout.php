<?php 
 
require_once '../Input.php';
require_once '../Auth.php';

session_start();

$sessionId = session_id();

if (!Auth::check()) {
	header("Location: http://codeup.dev/login.php");
	exit;
} else {
	Auth::logout();
}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Logout</title>
	</head>
	<body>
		<h1>You have been logged out!</h1>
		<a href="http://codeup.dev/login.php">Go back to Login Page</a>
	</body>
</html>