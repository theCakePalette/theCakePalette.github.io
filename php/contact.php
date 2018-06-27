<?php
	error_reporting(-1);
	ini_set('display_errors', 'On');
	set_error_handler("var_dump");

	
	    $recipient="zahabiya_96@yahoo.com";
	    $subject='!Website Query! '.$_POST["subject"];
	    $sender=$_POST["uname"];
	    $senderEmail=$_POST["email"];
	    $phone=$_POST["phone"];
	    $where=$_POST["where"];
	    $message=$_POST["message"];

	    $headers = array("From: zahabiyamhw@gmail.com",
					    "Reply-To: zahabiyamhw@gmail.com",
					    "X-Mailer: PHP/" . PHP_VERSION
					);
		$headers = implode("\r\n", $headers);
	    $mailBody="Name: $sender\nEmail: $senderEmail\nContact No: $phone\nFrom where: $where\n\n$message";

	    mail($recipient, $subject, $mailBody , $headers);
	    echo "thankYou";
	
	/*echo "thankYou";*/
?>