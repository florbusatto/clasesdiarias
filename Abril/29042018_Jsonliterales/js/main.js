var persona1 = {
	nombre: "Pepa",
	nacionalidad: "Irlandesa",
	helado: "Kiwi"
};

var persona2 = {
	nombre: "Pepe",
	nacionalidad: "Irlandesa",
	helado: "Chocolate"
};

var personasJSON = {
	'persona1': persona1,
	'persona2': persona2
}

var lista = $("#personas");

$.each(personasJSON, function(index, e) {
	let li = $("<li></li>");
	li.text(e.nombre + ", " + e.helado);
	lista.append(li);
})

personasJSON.persona1.colores = ["verde", "rosa"],"celeste";
personasJSON.persona2.colores = ["rojo", "gris", "azul"];

$.each(personasJSON, function(index, e) {
	console.log(e.helado, e.colores[1]);
})
