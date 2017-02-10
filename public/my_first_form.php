<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
	<<!--> Form's action is where the request goes </!-->
		<h1>Property search below:</h1>
		<form action="my_first_form.php" method="get">
			<p>
				<label for="property_type">Property </label>
				<input id="property_type" name="property_type" type="text">
			</p>
			<p>
				<label for="zipcode">Zipcode</label>
				<input id="zipcode" name="zipcode" type="text">
			</p>
			<p>
				<input type="submit">
			</p>
		</form>
		<h2>Youtube Search</h2>
		<form action="http://youtube.com/results" method="POST">
			<p>
				<label for="search_query">Search</label>
				<input id="search_query" name="search_query" type="text">
			</p>
			<p>
				<input type="submit">
			</p>
		</form>
		<h2>Kotaku Search</h2>
		<form action="http://www.kotaku.com/search" method ="GET">
			<p>
				<label for="q">Search</label>
				<input type="text" name="q" id="q">
			</p>
			<p>
				<button type="submit">Search</button>
			</p>
		<h2>Enter your login information:</h2>
		</form>
		<form method="POST" action="my_first_form.php">
			<p>
				<label for="username">Username</label>
				<input id="username" name="username" type="text">
			</p>
			<p>
				<label for="password">Password</label>
				<input id="password" name="password" type="password">
			</p>
			<p>
				<button type="submit">Submit</button>
			</p>
	</form>
	<h2>Form Practice</h2>
	<form action="my_first_form.php" method="POST">
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
		<h2>Compose an email</h2>
		<form action="my_first_form.php" method="POST">
			<p>
				<label for="compose">To</label>
				<input type="text" name="compose" id="compose">	
			</p>
			<p>
				<label for="from">From</label>
				<input type="text" name="from" id="from">
			</p>
			<textarea id="email_body" name="email_body" rows="5" cols="40">Compose email.
			</textarea>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
	</body>
</html>