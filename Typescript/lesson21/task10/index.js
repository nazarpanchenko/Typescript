export const finishForm = () => {
    let form = document.querySelector('form');
    let input = document.createElement('input');

    form.append(input);
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'login');

    input.setAttribute('type', 'password');
    input.setAttribute('name', 'password');
};
