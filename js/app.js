/* JS */
//Sélection des éléments du DOM HTML
const inputTask = document.forms['frmTODO'].task;
const btAdd = document.forms['frmTODO'].btAdd;
const taskList = document.getElementById('taskList');

//console.log(inputTask);

//Traitement des actions
btAdd.onclick = function() {
	//Lecture des données
	let task = inputTask.value;
	
	//Validation des données
	if(task!= '' && task.length>=3) {
		divNotification.innerHTML = '';
		//Traitement des données
		
	} else {
		//Notification des erreurs
		divNotification.innerHTML = 'Veuillez entrer une tâche d\'au moins 3 caractères';
	}
};