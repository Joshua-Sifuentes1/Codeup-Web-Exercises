<?php  

define('DB_HOST', 'localhost');
define('DB_NAME', 'parks_db');
define('DB_USER', 'parkspassword');
define('DB_PASS', 'parkspassword');

require 'db_connect.php';

$dropTable = 'DROP TABLE IF EXISTS "national_parks"'; 

$dbc->exec($dropTable);


?>