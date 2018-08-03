var enviar = document.getElementById("sendBtn");
var lista = document.getElementById("list");
var contador= 0;

function addTask() {
	contador++;
	var task = document.createElement("li"); 
	var textbox = document.getElementById("input"); 
	task.innerHTML = textbox.value; 
	task.setAttribute("id", contador); 
	textbox.value = ""; 

	var deleteBtn = document.createElement("button"); 
	deleteBtn.setAttribute("id", "deleteBtn");
	deleteBtn.addEventListener("click", deleteTask);
	deleteBtn.innerHTML = textbox.value;	
	function deleteTask() {
	 task.remove();
	}
	task.appendChild(deleteBtn); 
	list.appendChild(task); 
}
enviar.addEventListener("click", addTask);
