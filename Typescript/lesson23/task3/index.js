let id = 0;

const tasks = [
    { text: 'Buy milk', done: false, id : '' + (++id) },
    { text: 'Pick up Tom from airport', done: false, id : '' + (++id) },
    { text: 'Visit party', done: false, id : '' + (++id) },
    { text: 'Visit doctor', done: true, id : '' + (++id) },
    { text: 'Buy meat', done: true, id : '' + (++id) }
];

// const generateListItemId = (from, to) => {
//     let result = [];

//     for (let i = from; i < to; i++) {
//         result.push('' + i);
//     }

//     return result;
// };

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            if (listElem.hasChildNodes()) listElem.removeChild(listElem.childNodes[0]);
            
            const listItemElem = document.createElement('li');

            listItemElem.classList.add('list__item');
            listItemElem.dataset.id = id;
            // listItemElem.dataset.id = generateListItemId(0, listItems.length)[index];

            if (done) listItemElem.classList.add('list__item_done');

            const checkboxElem = document.createElement('input');

            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list-item__checkbox');

            listItemElem.append(checkboxElem, text);

            return listItemElem;
            
        }
    );

    listElem.append(...listItemsElems);
};

renderListItems(tasks);

const onTaskStatusChange = event => {
    const isChecked = event.target.classList.contains('list-item__checkbox');

    if (!isChecked) return;

    // const taskId = +(event.target.parentNode.dataset.id);

    // tasks[taskId].done = !tasks[taskId].done;
    const taskData = tasks.find(task => task.id === event.target.parentNode.dataset.id);
    Object.assign(taskData, { done : event.target.checked });
    renderListItems(tasks);
};

const listElem = document.querySelector('.list');
listElem.addEventListener('click', onTaskStatusChange);

const onCreateTask = () => {
    const createTaskField = document.querySelector('.task-input');

    if (createTaskField.value === '') return;

    tasks.push({ text : createTaskField.value, done : false, id : '' + (++id) });
    createTaskField.value === '';
    renderListItems(tasks);
};

const createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', onCreateTask);
