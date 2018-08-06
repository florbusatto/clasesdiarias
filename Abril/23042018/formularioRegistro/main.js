var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		correo = formulario.email,
		genero = formulario.genero,
		terminos = formulario.terminos,
		error = document.getElementById('error');

	function validarNombre(e){
		if(nombre.value == '' || nombre.value == null){ 
			error.style.display = 'block';
			error.innerHTML += '<li>Completa tu nombre para registrarte</li>';
			e.preventDefault(); 
		} 
	}

	function validarMail(e){
		if(email.value == '' || email.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Ingresa tu Email</li>';
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarGenero(e){
		if(genero.value == '' || genero.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Indica tu genero</li>';
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarTerminos(e){
		if (terminos.checked == false){
			error.style.display = 'block';
			error.innerHTML += '<li>Aceptar terminos y condiciones</li>';
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarFormulario(e){
		error.innerHTML = '';
		validarNombre(e);
		validarMail(e);
		validarGenero(e);
		validarTerminos(e);
	}

	formulario.addEventListener('submit', validarFormulario); 