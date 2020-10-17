import { renderTasks } from './renderer';
import { getItem, setItem } from './storage';
import { updateTask, getTasksList } from './tasksGateway';

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList
    .find((task) => task.id === task.id);
  const { done } = e.target;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done
      ? new Date().toISOString()
      : null,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
