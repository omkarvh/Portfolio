<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Compose email message
    $to = "omkarvh56@gmail.com";
    $subject = "New form submission";
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message: $message\n";

    // Send email
    $headers = "From: omkarhiremath74@gmail.com"; // Change this to your email address
    if (mail($to, $subject, $email_message, $headers)) {
        // Redirect back to the form with a success message
        header("Location: your_form_page.html?status=success");
        exit;
    } else {
        // Redirect back to the form with an error message
        header("Location: your_form_page.html?status=error");
        exit;
    }
}
?>





