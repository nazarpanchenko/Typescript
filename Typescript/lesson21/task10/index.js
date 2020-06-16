export const finishForm = () => {
    let form = document.querySelector('form');
    let input = document.createElement('input[type="text"]');
    input.setAttribute('name', 'login');
    input.setAttribute('type', 'password');
    input.setAttribute('name', 'password');

    form.append(input);
};
