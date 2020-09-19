const spinerElem = document.querySelector('.spinner');

export const hideSpinner = () => {
    spinerElem.classList.add('.spinner_hidden');

};

export const showSpinner = () => {
    spinerElem.classList.remove('.spinner_hidden');
};
