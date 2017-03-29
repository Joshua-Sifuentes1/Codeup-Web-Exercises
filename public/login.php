<?php
	session_start();

	if (isset($_SESSION['logged_in_user']) && $_SESSION['logged_in_user'] === "guest"){
		header("Location: http://codeup.dev/authorized.php");
		exit;
	}

	$message = "";
	// check if the form was submitted
	if(!empty($_POST)) {
		$username = isset($_POST['username']) ? $_POST['username'] : "";
		$password = isset($_POST['password']) ? $_POST['password'] : "";

		if($username == "guest" && $password == "password") {
			$_SESSION['logged_in_user'] = $username;
			header("Location: http://codeup.dev/authorized.php");
			exit;
		} else {
			$message = "Please retry your username or password";
		}
	}

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Login PHP exercise</title>

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	</head>
	<body>
<!-- 		<div class="container">
	    <div class="row">
	        <div class="col-md-offset-5 col-md-3">
	            <div class="form-login">
	            <h4>Welcome back.</h4>
	            <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" />
	            </br>
	            <input type="text" id="userPassword" class="form-control input-sm chat-input" placeholder="password" />
	            </br>
	            <div class="wrapper">
	            <span class="group-btn">     
	                <a href="#" class="btn btn-primary btn-md">login <i class="fa fa-sign-in"></i></a>
	            </span>
	            </div>
	            </div>
	        
	        </div>
	    </div>
	</div>
 -->

		<div class="container">
			<div class="text-center">
			<form method="POST" class="form">
				<div class="col-md-offset-5 col-xs-3">
					<label for="username">Username:</label>
					<input type="text" name="username" class="form-control" id="username" placeholder="username"><br>
				</div>
				<div class="col-md-offset-5 col-xs-3">
					<label for="password">Password:</label>
					<input type="password" name="password" class="form-control" id="password" placeholder="password"><br>
				</div>
				<div class="wrapper">
				<span class="group-btn">
					<input class="btn btn-default" type="submit" value="Login">
				</span>
				</div>
			</form>
			<p><?= $message; ?></p>
			</div>
		</div>
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="		sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	</body>
</html>