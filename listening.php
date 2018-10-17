<?php

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
