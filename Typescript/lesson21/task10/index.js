export const finishForm = () => {
    let form = document.querySelector('form');
    let input = document.createElement('input[type="text"][name="login"]');
    form.append(input);

    input.setAttribute('type', 'password');
    input.setAttribute('name', 'password');
};
