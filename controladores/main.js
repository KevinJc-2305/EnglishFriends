$(document).ready(function(){

	let id_rol = sessionStorage.getItem('id_rol');
	console.log(id_rol);

	$("#ingAdministracion").on('click',()=>{
		$(location).attr('href','./administracion.html');
	})

})