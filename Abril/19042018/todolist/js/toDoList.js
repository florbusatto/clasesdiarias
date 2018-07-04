var input = document.getElementById("task")
var button = document.getElementById("button")
var taskList = document.getElementById("taskList")
var clean = document.getElementById("clean")
var inputs = document.getElementsByTagName("input")

function makeList() {
	var createLi = document.createElement("li")
	createLi.innerHTML = input.value
	taskList.appendChild(createLi)
	input.value=""
}

function doClean() {
	var inputsArray = Array.from(inputs);
	inputsArray.forEach(function(e)
	{console.log(e)
		e.value = ""
	}
		)	
}
button.addEventListener("click",makeList)
clean.addEventListener("click",doClean)