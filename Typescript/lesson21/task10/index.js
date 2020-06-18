export const finishForm = () => {
    const formElem = document.querySelector('.login-form');
    const loginInputElem = document.createElement('input');
    loginInputElem.setAttribute('type', 'text');
    loginInputElem.setAttribute('name', 'login');
    formElem.prepend(loginInputElem);
    const passwordInputElem = document.querySelector('input[name="password"]');
    passwordInputElem.setAttribute('type', 'password');
};