<?php

require_once '../input.php';

function pageController()
{
	$data = [];
	$data['count'] = Input::get('count');

	return $data;
}
extract(pageController());
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Pong</title>
	</head>
	<body>
		<h1>Pong!</h1>
		<h1>Count: <?php echo $count; ?></h1>
		<a href="ping.php?count=<?php echo $count + 1; ?>">Hit</a>
		<a href="pong.php?count=0">Miss</a>
	</body>
</html>