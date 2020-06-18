export const finishForm = () => {
    const form = document.querySelector('form');
    const loginInputElem = document.createElement('input');

    loginInputElem.setAttribute('type', 'text');
    loginInputElem.setAttribute('name', 'login');
    form.prepend(loginInputElem);
    document.querySelector('input[name="password"]').setAttribute('type', 'password');
};

finishForm();
