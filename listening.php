<?php

$webmasterEmail = "keanritcher@gmail.com";


$senderName = $_POST["name"];
$senderEmail = $_POST['email'];
$senderSubject = $_POST['subject'];
$senderMessage = $_POST['message'];

$msg = 
"Name: " . $senderName . "\r\n" . 
"Email: " . $senderEmail . "\r\n" .
"Email: " . $senderSubject "\r\n" .
"Message: " . $senderMessage ;


mail( $webmasterEmail, "Feedback Form Results", $msg );



?>