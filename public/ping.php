<?php  

require 'functions.php';

$count = inputGet('count');

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Ping</title>
	</head>
	<body>
		<h1>Ping!</h1>
		<h1>Count: <?php echo $count; ?></h1>
		<a href="pong.php?count=<?php echo $count + 1; ?>">Hit</a>
		<a href="ping.php?count=0">Miss</a>
	</body>
</html>