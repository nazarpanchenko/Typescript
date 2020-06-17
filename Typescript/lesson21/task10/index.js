export const finishForm = () => {
    const form = document.querySelector('form');
    const loginInputElem = document.createElement('input');
    form.prepend(loginInputElem);

    loginInputElem.setAttribute('type', 'text');
    loginInputElem.setAttribute('name', 'login');

    document.querySelector('input[name="password"]').setAttribute('type', 'password');
};

finishForm();
