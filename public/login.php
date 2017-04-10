<?php
session_start();

$sessionId = session_id();

require_once '../Input.php';
require_once '../Auth.php';

function pageController()
{
	$data = [];
	
	$message = "";
	// check if the form was submitted
	if(!empty($_POST)) {
		$username = Input::get('username');
		$password = Input::get('password');
		Auth::attempt($username, $password);
		if (Auth::check()) {
			header("Location: http://codeup.dev/authorized.php");
			exit;
		} else {
			$message = "Please retry username or password.";
		}
	}
	$data['message'] = $message;
	return $data;
}
extract(pageController());
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE-edge">
		<meta name="viewport" content="width-device-width, initial-scale=1">
		<title>Login PHP exercise</title>

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	</head>
	<body>
		<div class="container">
			<form method="POST" class="form-signin">
				<h2 class="form-signin-heading text-center">Please sign in</h2>
				<div class="col-xs-offset-3 col-xs-6">
					<label for="username" class="sr-only">Username</label>
					<input type="text" name="username" class="form-control" id="username" placeholder="Username" required="autofocus">
				</div>
				<div class="col-xs-offset-3 col-xs-6">
					<label for="password" class="sr-only">Password</label>
					<input type="password" name="password" class="form-control" id="password" placeholder="Password" required>
				</div>
				<div class="col-xs-offset-3 col-xs-6">
					<button class="btn btn-lg btn-primary btn-block" type="submit" value="Login">Login</button>
				</div>
			</form>
			<p><?= $message ?></p>
		</div>

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="		sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	</body>
</html>