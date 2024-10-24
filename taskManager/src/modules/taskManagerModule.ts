import { createTask } from "./newTaskModule";
import { taskItemsList } from "./taskItemsListModule";


const renderTasks = (): void => {

}



export const initNewTaskButton = (buttonElement:HTMLButtonElement) => {

    const taskList = document.querySelector('.task-list') as HTMLDivElement;
    const saveTaskButton = document.getElementById('save-task-button') as HTMLButtonElement;
    
    if (!taskList || !saveTaskButton ) {
        throw new Error('taskList or SaveTaskButton not saved in the DOM');
    }

    //Creates new task input
    if (buttonElement) {
        buttonElement.addEventListener('click', () => {
            console.log('Button clicked');
        
            //Hides newtask button and displays savetask button
            buttonElement.style.display = 'none';
            saveTaskButton.style.display = 'block';
            
            //Creates and appends task input container
            const taskInputContainer: HTMLDivElement = document.createElement('div');
            taskInputContainer.classList.add('task-input-container');
            taskList.appendChild(taskInputContainer);
            
            //Creates task input form
            const taskInputForm: HTMLInputElement = document.createElement('input');
            taskInputForm.classList.add('task-input-form');
            taskInputForm.id = 'task-input-form';
            taskInputForm.type = 'text';
            taskInputContainer.appendChild(taskInputForm);
        });
    }
    else {
        throw new Error('buttonElement not found in the DOM');
    }
};

export const initSaveButton = (buttonElement:HTMLButtonElement) => {
        const taskList = document.querySelector('.task-list') as HTMLDivElement;
        const newTaskButton = document.getElementById('new-task-button');

        if (!taskList || !newTaskButton) {
            throw new Error ('taskList or newTaskButton not found in DOM');
        }

        if (buttonElement) {
            buttonElement.addEventListener('click', () => {
                //hides save-button and shows new task button
                newTaskButton.style.display = 'block';
                buttonElement.style.display = 'none';

            });
        }
}
