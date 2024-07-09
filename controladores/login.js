$(document).ready(function(){

	$('#enviar_login').on('click', function(event){
		event.preventDefault();
		var usuario=$('#usuario').val();
		var password=$('#password').val();
		console.log(usuario,password);
		if(usuario!=""){
	      if(password!=""){
	        $.ajax({
	          url:'./modelos/login.php',
	          type:'post',
	          data: {usuario:usuario,password:password},
	          success: function(res){
	            console.log(res);
	            var resp = res;
	              var respuesta = JSON.parse(res);
	              if(respuesta!=false){
	                sessionStorage.setItem('nombre', respuesta.nombre);
	                sessionStorage.setItem('rol', respuesta.rol);
	                sessionStorage.setItem('id_rol', respuesta.id_rol);
	                sessionStorage.setItem('id_usuario', respuesta.id_usuario);
	                $(location).attr('href','./vistas/main.html');
	              }else{
	                $('#mensaje_error').html("<br>Usuario o Contraseña incorrecta");
	                setInterval(function(){ $('#mensaje_error').html(""); }, 3000);
	              }
	          },
	          error: function(){
	            $('#mensaje_error').html('ha ocurrido un error');
	          }
	        })
	      }
	    }
	});

})