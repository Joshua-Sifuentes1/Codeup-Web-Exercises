<?php
	var_dump($_GET);
	var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Form PRactice</title>
	</head>
	<body>
		<h1>Form Practice</h1>

		<form action="requests.php" method="POST">
			<p>
				<label for="username">Username</label>
				<input type="text" name="username" id="username" value="admin" placeholder="Enter username here." required autofocus>
			</p>
			<p>
				<label for="password">Password</label>
				<input type="password" placeholder="Enter password here" id="password" required name="password">
			</p>
			<p>
				<button type="submit">Login</button>
			</p>
		</form>
	</body>
</html>