<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$to = "cciobanu5151@gmail.com";
$date = date("d.m.Y");
$time = date("h:1");
$from = $email;
$subject = "Заявка с сайта";

$msg = "
    Имя:$name /n
    Почта: $email /n
    Сообщение: $message";
mail($to, $subject, $msg, "From: $from");
