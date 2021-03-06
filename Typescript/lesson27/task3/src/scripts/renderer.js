import { getItem, setItem } from './storage.js';

const tasksList = [
    { text: 'Buy milk', done: false, id : Math.random().toString(), createDate : new Date().getTime() },
    { text: 'Pick up Tom from airport', done: false, id : Math.random().toString(), createDate : new Date().getTime() },
    { text: 'Visit party', done: false, id : Math.random().toString(), createDate : new Date().getTime() },
    { text: 'Visit doctor', done: true, id : Math.random().toString(), createDate : new Date().getTime(), finishDate : new Date().getTime() },
    { text: 'Buy meat', done: true, id : Math.random().toString(), createDate : new Date().getTime(), finishDate : new Date().getTime() }
];

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
    if (a.done - b.done !== 0) {
        return a.done - b.done;
    }

    if (a.done) {
        return new Date(b.finishDate) - new Date(a.finishDate);
    }
    
    return new Date(b.createDate) - new Date(a.createDate);
};

const createCheckox = ({ done, id }) => {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', id);
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');

    return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

    const checkboxElem = createCheckox({ done, id });

    if (done) {
        listItemElem.classList.add('list__item_done');
    }

    listItemElem.append(checkboxElem, text);

    return listItemElem;
};


export const renderTasks = () => {
    const tasksList = getItem('tasksList') || [];

    listElem.innerHTML = '';

    const tasksElems = tasksList
        .sort(compareTasks)
        .map(createListItem);

    listElem.append(...tasksElems);
};
