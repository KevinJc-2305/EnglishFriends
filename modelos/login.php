<?php

require_once '../libreria/conectar_db.php';

$conexion -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$datos=array();
$usuario=$_POST['usuario'];
$contrasena=$_POST['password'];

$sql = "SELECT * FROM usuarios,usuario_roles,roles
		WHERE usuarios.usuario = :usuario 
		AND usuarios.password= :contrasena
		AND usuarios.id_usuario=usuario_roles.id_usuario
		AND roles.id_rol=usuario_roles.id_rol
		AND usuarios.estado='1'";

$query = $conexion->prepare($sql);
$tildes = $conexion->query("SET NAMES 'utf8'"); 
$query->bindParam(":usuario",$usuario);
$query->bindParam(":contrasena",$contrasena); 
$query -> execute(); 
	
$datos = $query -> fetch(PDO::FETCH_ASSOC); 
$query = null;
$conexion = null;
echo json_encode($datos);



?>