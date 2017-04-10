<?php

define('DB_HOST', 'localhost');
define('DB_NAME', 'employees');
define('DB_USER', 'vagrant');
define('DB_PASS', 'vagrant');


require __DIR__ . '/db_connect.php';

echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . PHP_EOL;


?>