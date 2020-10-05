import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateway.js';

export const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }
    
    const taskId = e.target.dataset.id;
    const tasksList = getItem('tasksList');
    const { text, createDate } = tasksList
        .find(task => task.id === task.id);
    const done = e.target.done;
    
    
    const updatedTask = {
        text,
        createDate,
        done,
        finishDate: done 
            ? new Date().toISOString()
            : null
    };
    updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
        setItem('tasksList', newTasksList);
        renderTasks();
    });
};
