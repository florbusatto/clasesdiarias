var navbar_div = document.getElementById("navbar");	
function cargarNavBar(padre) {
	var ul = document.createElement("ul");
	for (var i = 0; i < 1; i++) {
		var li = document.createElement("li");
		var texto = document.createElement("li");
		texto.textContent = "Buscar Amigos";	
		li.appendChild(texto);
		ul.appendChild(li);	
		var texto = document.createElement("li");
		texto.textContent = "Inicio"
		li.appendChild(texto);
		ul.appendChild(li);	
		var texto = document.createElement("li");
		texto.textContent = "Marìa"
		li.appendChild(texto);
		ul.appendChild(li);
	}
	navbar.appendChild(ul);
}

var perfil_div = document.getElementById("perfil");
var datos_array = ["florenciabusatto.png","Marìa Florencia Busatto","Front 🔚 Dev Coming 🔜💻| Cantante amateur🎤🎶 | Marvel & DC Heroes🇫🇦🇳💙","Vive en Buenos Aires","💙Tiene una relaciòn" ];

function cargarDatosPerfil(datos) {
	var foto = document.createElement("img");
	foto.src = "img/" + datos_array[0];
	foto.style.width = "250px";
	var nombre = document.createElement("h1");
	nombre.textContent = datos_array[1];
	var descripcion = document.createElement("h2");
	descripcion.textContent = datos_array[2];
	var ciudad = document.createElement("h3");
	ciudad.textContent = datos_array[3];	
	var relacion = document.createElement("h4");	
	relacion.textContent = datos_array[4];

	perfil_div.appendChild(foto);
	perfil_div.appendChild(nombre);
	perfil_div.appendChild(descripcion);
	perfil_div.appendChild(ciudad);	
	perfil_div.appendChild(relacion);
}

var muro = document.getElementById("muroFace");	
var fotomuro_array = ["cactus.jpg"];
function cargarMuro(padre) {
	var img = document.createElement("img");	
	img.src = "img/" + fotomuro_array[0];					
	muro.appendChild(img);		
}

var amigos_div = document.getElementById("amigos");
var amigo_1 = ["Marisa E.", "amigouno.jpg"];
var amigo_2 = ["Florencia M.", "amigodos.jpg"];	
var amigo_3 = ["Johanna F.", "amigotres.jpg"];	
var amigo_4 = ["Marisa E.", "amigouno.jpg"];
var amigo_5 = ["Florencia M.", "amigodos.jpg"];	
var amigo_6 = ["Johanna F.", "amigotres.jpg"];
var amigos = [amigo_1, amigo_2, amigo_3, amigo_4, amigo_5, amigo_6];

function cargarListaImagenes(lista, padre) {
	for (var i = 0; i < lista.length; i++) {
		var img = document.createElement("img");
		img.src = "img/" + lista[i][1]
		img.style.width = "80px";
		img.style.height = "80px";
		padre.appendChild(img);
	}

}	
cargarNavBar(navbar_div);
cargarDatosPerfil(datos_array);
cargarListaImagenes(amigos,amigos_div);
cargarMuro(muro);