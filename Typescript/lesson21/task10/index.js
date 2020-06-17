export const finishForm = () => {
    const form = document.querySelector('form');
    const loginInputElem = document.createElement('input');

    form.append(loginInputElem);
    loginInputElem.setAttribute('type', 'password');
    loginInputElem.setAttribute('name', 'password');
};

finishForm();
