<?php
use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;

$mail->Username = 'yourgmail@gmail.com';
$mail->Password = 'YOUR_APP_PASSWORD';

$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom('yourgmail@gmail.com', 'MCL Careers');

$mail->addAddress('mcl.operations.pty@gmail.com');

$mail->Subject = "New Job Application";

$body = "
Name: ".$_POST['fullname']."
Email: ".$_POST['email']."
Phone: ".$_POST['phone']."
Experience: ".$_POST['experience']."
Position: ".$_POST['position']."

Cover Letter:
".$_POST['coverletter'];

$mail->Body = $body;

/* Attach files */

foreach($_FILES as $file){

    if($file['error'] == 0){
        $mail->addAttachment(
            $file['tmp_name'],
            $file['name']
        );
    }
}

$mail->send();

echo "Application Submitted Successfully";

?>