<?php

$frm_name  = "CAP Landing";
$recepient = "subscribe@cutandprint.ru";
$sitename  = "CUTANDPRINT";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["username"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$formname = trim($_POST["formname"]);

$message = "
Форма: $formname <br>
E-mail: $email <br>
Имя: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
