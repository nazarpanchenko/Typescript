export const finishForm = () => {
    let form = document.querySelector('form');
    let loginInputElem = document.createElement('input');

    loginInputElem.setAttribute('type', 'text');
    loginInputElem.setAttribute('name', 'login');
    form.prepend(loginInputElem);
    document.querySelector('input[name="password"]').setAttribute('type', 'password');
};

finishForm();
