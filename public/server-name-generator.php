<?php

$adjectives = ["legendary", "lag-free", "clean", "lightning-fast", "calculating", "functional", "retro", "savage", "iconic", "tactical"];
$nouns = ["time", "year", "people", "way", "day", "man", "thing", "student", "life", "computer", "game"];

function randomElement($array){
	$randomNumber = rand(0, 9);
	return $array[$randomNumber];
}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Random Server Name Generator</title>
	</head>
	<body>
		<h1>New server name:</h1>
		<h2>
		<?php  
			echo randomElement($adjectives) . " " . randomElement($nouns);
		?>			
		</h2>
	</body>
</html>