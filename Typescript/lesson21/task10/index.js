export const finishForm = () => {
    let form = document.querySelector('form');
    let input = document.createElement('input[type="text"]');

    form.append(input);
    input.setAttribute('name', 'login');
    input.setAttribute('type', 'password');
    input.setAttribute('name', 'password');
};
