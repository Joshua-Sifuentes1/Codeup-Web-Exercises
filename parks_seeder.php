<?php  

define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'parks_db');
define('DB_USER', 'parks_user');
define('DB_PASS', 'parkspassword');

require 'db_connect.php';

$truncate = 'TRUNCATE national_parks';

$dbc->exec($truncate);

$parks = [
	['name' => 'Yellowstone National Park', 'location' => 'Wyoming', 'date_established' => '1872-03-01', 'area_in_acres' => '2221440'],
	['name' => 'Yellowstone National Park', 'location' => 'Wyoming', 'date_established' => '1872-03-01', 'area_in_acres' => '2221440']
];

foreach($parks as $park) {
	$query = "INSERT into national_parks (name, location, date_established, area_in_acres)
		VALUES ('{$park['name']}', '{$park['location']}', '{$park['date_established']}', '{$park['area_in_acres']}')";

	$dbc->exec($query);
};

?>