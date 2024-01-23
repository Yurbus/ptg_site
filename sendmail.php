<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->Charset = 'UTF-8';
    $mail->setLanguage('en','phpmailer/language');
    $mail->IsHTML(true);

    //От кого
    $mail->setForm('frankins636@gmail.com', 'PTG');
    //Кому
    $mail->addAddress('frankins636@gmail.com');
    //Тема письма
    $mail->Subject = "Message from PTG";


    //Тело письма
    $body = '<h1>Message from website PTG</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['lastName']))){
        $body.='<p><strong>Last name:</strong> '.$_POST['lastName'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['massage']))){
        $body.='<p><strong>Message:</strong> '.$_POST['massage'].'</p>';
    }

    $mail->Body = $body;

    //Sending
    if (!$mail->send()) {
        $message = 'Error';
    } else {
        $mrssage = 'Message sent';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    acho json_encode($response);
?>