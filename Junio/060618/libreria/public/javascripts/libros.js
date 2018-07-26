var agregar = $('#agregar');

$(document).on('click','#agregar',function(e){

	e.preventDefault();
	
	if($('#title').val().length == 0){

		alert('Debe completar el titulo');
	}else{

		$('#nuevo').submit();
	}	
});	

var borrar_libro = $ ('#borrar_libro');

$(document).on('click','#borrar_libro',function(e){

	e.preventDefault();
	
	if($('#title').val().length == 1){

		alert('Sino esta seguro del libro seleccionado, borrelo del carrito');
	}else{

		$('#nuevo').submit();
	}	
});	