export const squaredNumbers = () => {
    let elem = document.getElementsByClassName('.number');

    for (let i = 0; i < elem.length; i++) {
        let squaredNum = +(elem[i].dataset.number) * 2;
        elem[i].dataset.squaredNumber = '' + squaredNum;
    }
};

squaredNumbers();
