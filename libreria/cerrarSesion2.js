$(document).ready(function(){
	$('#salir').on('click', function(){
    	sessionStorage.removeItem('id_rol');
    	sessionStorage.removeItem('datos');
    	sessionStorage.removeItem('id_PDD');
    	sessionStorage.removeItem('id_PDD2');
    	sessionStorage.removeItem('id_Eje_PDD');
    	sessionStorage.clear();
    	location.href="../../index.html";
	})
});
