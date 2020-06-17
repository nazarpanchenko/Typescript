export const finishForm = () => {
    let form = document.querySelector('form');
    let input = document.createElement('input[type="text"]');
    input.setAttribute('type', 'password');
    input.setAttribute('name', 'login');

    form.append(input);
    input.setAttribute('name', 'password');
};
