<?php
require_once 'functions.php';

session_start();
$sessionId = session_id();

function pageController() {
    clearSession();
    redirect("login.php");
}
pageController();
