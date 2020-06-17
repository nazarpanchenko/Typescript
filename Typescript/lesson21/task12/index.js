export const squaredNumbers = () => {
    let elem = document.querySelectorAll('.number');

    for (let i = 0; i < elem.length; i++) {
        let squaredNum = +((elem[i].dataset.number) * (elem[i].dataset.number));
        elem[i].dataset.squaredNumber = '' + squaredNum;
        console.log(elem[i]);
    }
};

squaredNumbers();
