export const finishForm = () => {
    const form = document.querySelector('form');
    const loginInputElem = document.createElement('input');

    document.querySelector('input[type="text"]').setAttribute('type', 'password');
    document.querySelector('input[type="text"]').setAttribute('name', 'login');

    form.append(loginInputElem);
    loginInputElem.setAttribute('type', 'password');
    loginInputElem.setAttribute('name', 'password');
};
