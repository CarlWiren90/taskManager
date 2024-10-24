import { initNewTaskButton, initSaveButton } from "./modules/taskManagerModule";


const newTaskButton = document.getElementById('new-task-button') as HTMLButtonElement;
const saveTaskButton = document.getElementById('save-task-button') as HTMLButtonElement;


//Starting point
saveTaskButton.style.display = 'none';
initNewTaskButton(newTaskButton);
initSaveButton(saveTaskButton);