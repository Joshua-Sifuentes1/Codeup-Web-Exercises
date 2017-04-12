<?php  

require 'db_connect.php';

$dropTable = 'DROP TABLE IF EXISTS national_parks'; 

$dbc->exec($dropTable);

$addTable = 'CREATE TABLE IF NOT EXISTS national_parks (

	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(150) NOT NULL DEFAULT \'NONE\',
	location VARCHAR(150) NOT NULL DEFAULT \'NONE\',
	date_established DATE,
	area_in_acres DOUBLE(12, 2),
	PRIMARY KEY (id)
	)';

$dbc->exec($addTable);

?>