const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
    const eventListElem = document.querySelector('.events-list');

    eventListElem.innerHTML += `<span style="color : ${color}; margin-left: 8px;">${text}</span>`;
};

const clearTarget = () => {
    const eventListElem = document.querySelector('.events-list');

    eventListElem.innerHTML = '';
};

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clearTarget);

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreenSpan);
spanElem.addEventListener('click', logGreySpan, true);

const addTarget = () => {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGreenP);
    pElem.addEventListener('click', logGreyP, true);

    spanElem.addEventListener('click', logGreenSpan);
    spanElem.addEventListener('click', logGreySpan, true);
};

const removeTarget = () => {
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);

    pElem.removeEventListener('click', logGreenP);
    pElem.removeEventListener('click', logGreyP, true);

    spanElem.removeEventListener('click', logGreenSpan);
    spanElem.removeEventListener('click', logGreySpan, true);
};

const addBtn = document.querySelector('.attach-handlers-btn');
addBtn.addEventListener('click', addTarget);

const removeBtn = document.querySelector('.remove-handlers-btn');
removeBtn.addEventListener('click', removeTarget);