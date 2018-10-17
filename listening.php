<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
        die();
    }
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: text/plain');
    $ret = [
        'result' => 'OK',
    ];





$webmasterEmail = "keanritcher@gmail.com";


$senderName = $_POST["name"];
$senderEmail = $_POST['email'];
$senderSubject = $_POST['subject'];
$senderMessage = $_POST['message'];

$msg = 
"Name: " . $senderName . 
"Email: " . $senderEmail . 
"Email: " . $senderSubject .
"Message: " . $senderMessage ;


mail( $webmasterEmail, "Feedback Form Results", $msg );



?>
