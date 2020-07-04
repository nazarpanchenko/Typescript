const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true }
];

const generateListItemId = (from, to) => {
    let result = [];

    for (let i = from; i < to; i++) {
        result.push('' + i);
    }

    return result;
};

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }, index) => {
            if (listElem.hasChildNodes()) listElem.removeChild(listElem.childNodes[0]);
            
            const listItemElem = document.createElement('li');

            listItemElem.classList.add('list__item');
            listItemElem.dataset.id = generateListItemId(0, listItems.length)[index];

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
    const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }

    const taskData = tasks.find(task => task.id === event.target.dataset.id);
    Object.assign(taskData, { done : event.target.checked });
    renderListItems(tasks);
};

const listElem = document.querySelector('.list');
listElem.addEventListener('click', onTaskStatusChange);

const onCreateTask = () => {
    const createTaskField = document.querySelector('.task-input');

    if (createTaskField.value === '') return;

    tasks.push({ text : createTaskField.value, done : false });
    createTaskField.value === '';
    renderListItems(tasks);
};

const createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', onCreateTask);
