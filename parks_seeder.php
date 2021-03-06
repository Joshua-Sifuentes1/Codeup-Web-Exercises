<?php  

require 'db_connect.php';

$truncate = 'TRUNCATE national_parks';

$dbc->exec($truncate);

$parks = [
    ['name' => 'Acadia', 'area_in_acres' => '47389.67', 'date_established' => '1919-02-26', 'location' => 'Maine'],
    ['name' => 'American Samoa', 'area_in_acres' => '9000.00', 'date_established' => '1919-02-26', 'location' => 'American Samoa'],
    ['name' => 'Arches', 'area_in_acres' => '76518.98', 'date_established' => '1929-04-12', 'location' => 'Utah'],
    ['name' => 'Badlands', 'area_in_acres' => '242755.94', 'date_established' => '1978-11-10', 'location' => 'South Dakota'],
    ['name' => 'Carlsbad Caverns', 'area_in_acres' => '46766.45', 'date_established' => '1930-05-14', 'location' => 'New Mexico'],
    ['name' => 'Denali', 'area_in_acres' => '4740911.72', 'date_established' => '1917-02-26', 'location' => 'Alaska'],
    ['name' => 'Everglades', 'area_in_acres' => '1508537.90', 'date_established' => '1934-05-30', 'location' => 'Florida'],
    ['name' => 'Arches', 'area_in_acres' => '75518.98', 'date_established' => '1971-11-12', 'location' => 'Utah'],
	['name' => 'Grand Canyon', 'area_in_acres' => '1217403.32',  'date_established' => '1919-02-26', 'location' => 'Arizona'],
    ['name' => 'Joshua Tree', 'area_in_acres' => '789745.47',  'date_established' => '1994-10-31', 'location' => 'California']
];

foreach($parks as $park) {
	$query = "INSERT into national_parks (name, location, date_established, area_in_acres)
		VALUES ('{$park['name']}', '{$park['location']}', '{$park['date_established']}', '{$park['area_in_acres']}')";

	$dbc->exec($query);
};

?>