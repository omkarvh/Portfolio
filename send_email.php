<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "omkarvh56@gmail.com";
    $subject = "New form submission";
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message: $message\n";

    $headers = "From: omkarhiremath74@gmail.com";
    $headers .= "\r\nReply-To: $email";

    if (mail($to, $subject, $email_message, $headers)) {
        header("Location: your_form_page.html?status=success");
        exit;
    } else {
        header("Location: your_form_page.html?status=error");
        exit;
    }
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Method Not Allowed";
}
?>
