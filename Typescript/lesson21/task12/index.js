export const squaredNumbers = () => {
    let elem = document.querySelector('.number');
    let squaredNum = +(elem.dataset.number) * 2;
    elem.dataset.squaredNumber = '' + squaredNum;
};

squaredNumbers();
