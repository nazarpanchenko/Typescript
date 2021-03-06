let id = 0;

const tasks = [
    { text: 'Buy milk', done: false, id : '' + (++id), createDate : new Date().getTime() },
    { text: 'Pick up Tom from airport', done: false, id : '' + (++id), createDate : new Date().getTime() },
    { text: 'Visit party', done: false, id : '' + (++id), createDate : new Date().getTime() },
    { text: 'Visit doctor', done: true, id : '' + (++id), createDate : new Date().getTime(), finishDate : new Date().getTime() },
    { text: 'Buy meat', done: true, id : '' + (++id), createDate : new Date().getTime(), finishDate : new Date().getTime() }
];

const compareTasks = (a, b) => {
    if (a.done - b.done !== 0) {
        return a.done - b.done;
    }

    if (a.done) {
        return new Date(b.finishDate) - new Date(a.finishDate);
    }
    
    return new Date(b.createDate) - new Date(a.createDate);
};

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort(compareTasks)
        .map(({ text, done, id }) => {
            if (listElem.hasChildNodes()) listElem.removeChild(listElem.childNodes[0]);
            
            const listItemElem = document.createElement('li');

            listItemElem.classList.add('list__item');

            if (done) listItemElem.classList.add('list__item_done');

            const checkboxElem = document.createElement('input');

            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            checkboxElem.dataset.id = id;

            listItemElem.append(checkboxElem, text);

            return listItemElem;
            
        }
    );

    listElem.append(...listItemsElems);
};

renderListItems(tasks);

const onTaskStatusChange = event => {
    const isChecked = event.target.classList.contains('list__item-checkbox');

    if (!isChecked) return;

    const taskData = tasks.find(task => task.id === event.target.dataset.id);
    Object.assign(taskData, { done : event.target.checked, finishDate : new Date().getTime() });
    renderListItems(tasks);
};

const listElem = document.querySelector('.list');
listElem.addEventListener('click', onTaskStatusChange);

const onCreateTask = () => {
    const createTaskField = document.querySelector('.task-input');

    if (createTaskField.value === '') return;

    tasks.push({ text : createTaskField.value, done : false, id : '' + (++id), createDate : new Date().getTime() });
    createTaskField.value === '';
    renderListItems(tasks);
};

const createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', onCreateTask);
