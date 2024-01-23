<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // From
    $mail->setFrom('contact@ptg.trainer.dp.ua', 'PTG');

    // To
    $mail->addAddress('contact@ptg.trainer.dp.ua');

    // Subject
    $mail->Subject = "Message from PTG";

    // Body
    $body = '<h1>Message from website PTG</h1>';

    if (isset($_POST['name']) && trim($_POST['name']) !== '') {
        $body .= '<p><strong>Name:</strong> ' . $_POST['name'] . '</p>';
    }
    if (isset($_POST['lastName']) && trim($_POST['lastName']) !== '') {
        $body .= '<p><strong>Last name:</strong> ' . $_POST['lastName'] . '</p>';
    }
    if (isset($_POST['phone']) && trim($_POST['phone']) !== '') {
        $body .= '<p><strong>Phone:</strong> ' . $_POST['phone'] . '</p>';
    }
    if (isset($_POST['email']) && trim($_POST['email']) !== '') {
        $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p>';
    }
    if (isset($_POST['message']) && trim($_POST['message']) !== '') {
        $body .= '<p><strong>Message:</strong> ' . $_POST['message'] . '</p>';
    }

    $mail->Body = $body;

    // Sending
    if (!$mail->send()) {
        $message = 'Error';
    } else {
        $message = 'Message sent';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
    
?>