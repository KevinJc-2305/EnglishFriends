<?php

$conexion = null;
$servidor = 'localhost';
$bd = 'jpf';
$user = 'root';
$pass = '';
try{
	$conexion = new PDO('mysql:host='.$servidor.';dbname='.$bd,$user,$pass);
}catch (PDOException $e){
	echo "Error de Conexión!";
	exit;
}
return $conexion;
?>