import { verifLogin } from './funcionesAdmin.js'

$(document).ready(function(){

	$('#enviar_login').on('click', function(event){
		event.preventDefault();
		var usuario=$('#usuario').val();
		var password=$('#password').val();
		console.log(usuario,password);
		verifLogin(usuario,password);
	});

	

})