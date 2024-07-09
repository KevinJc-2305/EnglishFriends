$(document).ready(function(){

	let id_rol = sessionStorage.getItem('id_rol');
	console.log(id_rol);

	$("#ingUsuarios").on('click',()=>{
		$("#titulo").html(`<strong>Usuarios: </strong>`);
		$("#espacioTrabajo").html(`<span>Espacio Usuarios</span>`);
	})

	$("#ingRoles").on('click',()=>{
		$("#titulo").html(`<strong>Roles: </strong>`);
		$("#espacioTrabajo").html(`<span>Espacio Roles</span>`);
	})

})