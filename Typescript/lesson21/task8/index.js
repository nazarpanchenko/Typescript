export const createButton = (buttonText) => {
    let button = document.createElement('button');
    let body = document.querySelector('body');
    body.append(button);
    button.innerHTML = buttonText;
};
