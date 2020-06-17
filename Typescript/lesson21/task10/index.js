export const finishForm = () => {
    const form = document.querySelector('form');
    const loginInputElem = document.createElement('input');
    form.append(loginInputElem);
    loginInputElem.setAttribute('type', 'text');
    loginInputElem.setAttribute('name', 'login');

    const passwordInputElem = document.createElement('input');
    form.append(passwordInputElem);
    passwordInputElem.setAttribute('type', 'password');
    passwordInputElem.setAttribute('name', 'password');
};

finishForm();
