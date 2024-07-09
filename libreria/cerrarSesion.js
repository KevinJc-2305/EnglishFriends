$(document).ready(function(){

	$("#salir").on('click',()=>{
		sessionStorage.removeItem('id_rol');
    	sessionStorage.removeItem('datos');
    	sessionStorage.clear();
    	$(location).attr('href','../index.html');
	})
	
});


