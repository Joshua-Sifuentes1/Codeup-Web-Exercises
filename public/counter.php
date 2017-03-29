<?php  

function pageController() {

	$data = [];

	if (isset($_GET['count'])) {
		$data['count'] = $_GET['count'];
	} else {
		$data['count'] = 0;
	}

	return $data;

}

extract(pageController());

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Counter</title>
	</head>
	<body>
		<h1>Count: <?php echo $count; ?></h1>
		<a href="counter.php?count=<?php echo $count + 1; ?>">Up</a>
		<a href="counter.php?count=<?php echo $count - 1; ?>">Down</a>
	</body>
</html>