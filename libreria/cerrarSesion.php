<?php
session_start();
unset($_SESSION['id_usuario']);
unset($_SESSION['password']);

session_destroy();
header('Location: ../index.html');

