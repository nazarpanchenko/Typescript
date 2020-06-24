let id = 0;

const tasks = [
    { text: 'Buy milk', done: false, id : '' + (++id) },
    { text: 'Pick up Tom from airport', done: false, id : '' + (++id) },
    { text: 'Visit party', done: false, id : '' + (++id) },
    { text: 'Visit doctor', done: true, id : '' + (++id) },
    { text: 'Buy meat', done: true, id : '' + (++id) }
];

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.dataset.id = id;

            if (done) listItemElem.classList.add('list__item_done');

            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list-item__checkbox');

            checkboxElem.addEventListener('click', (event) => {
                if (event.target.checked) {
                    done = true;
                    checkboxElem.checked = done;
                } 
            });

            listItemElem.append(checkboxElem, text);

            return listItemElem;
        }
    );

    listElem.append(...listItemsElems);
};

renderListItems(tasks);

const createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', renderListItems);
