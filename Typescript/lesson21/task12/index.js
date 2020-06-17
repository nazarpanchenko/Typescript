export const getTitleElement = () => {
    let elem = document.querySelector('.number');
    let squaredNum = +(elem.dataset.number) * 2;
    let squaredNumAttr = elem.setAttribute('data-squared-number', '');
    elem.dataset[squaredNumAttr] = '' + squaredNum;
};

getTitleElement();
