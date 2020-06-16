const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems.map(itemText => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.classList.add('list-item__checkbox');
        listItemElem.append(checkboxElem, itemText);

        return listItemElem;
    });

    listElem.append(...listItemsElems);
};

renderListItems(tasks);
