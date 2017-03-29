<?php  

// inputHas($key): returns true or false based on whether the key is available.

function inputHas($key) {

	$keyValue = isset($_REQUEST[$key]);

	return $keyValue;

}

// inputGet($key): returns the value specified by the key, or null if the key is not set.

function inputGet($key){

	$keyValue = (inputHas($key)) ? $_REQUEST[$key] : null;

	return $keyValue;

}

// escape($input): returns the input as a safely escaped string.

function escape($input){

	return htmlspecialchars(strip_tags($input));

}


?>