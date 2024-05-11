<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    // Compose email message
    $to = "omkarvh56@gmail.com";
    $subject = "New form submission";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";

    // Send email
    $headers = "From:omkarhiremath74@gmail.com"; // Change this to your email address
    mail($to, $subject, $message, $headers);

    // Redirect back to the form
    header("Location: your_form_page.html");
    exit;
}
?>
