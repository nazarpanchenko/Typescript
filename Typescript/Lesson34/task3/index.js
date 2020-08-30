document.querySelector('form').addEventListener('submit', () => {
    document.querySelector('form').reportValidity();
}, false);

const baseUrl = 'https://5f4107e4a5e9db0016302376.mockapi.io/api/v1/allUsers';

const formInput = document.querySelector('.form-input');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');
const emailElem = document.querySelector('#email');
const nameElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');

const newUser = {
    email : emailElem.textContent,
    userName : nameElem.textContent,
    password : passwordElem.textContent
};
const onEmailChange = event => {
    emailElem.textContent = event.target.value;
    newUser.email = emailElem.textContent;
    errorText.textContent = '';
};
const onUserNameChange = event => {
    nameElem.textContent = event.target.value;
    newUser.userName = nameElem.textContent;
    errorText.textContent = '';
};
const onPasswordChange = event => {
    passwordElem.textContent = event.target.value;
    newUser.password = passwordElem.textContent;
    errorText.textContent = '';
};

const onCreateUser = () => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if (!response.ok) {
            errorText.textContent = 'Failed to create user';
        }
        formInput.textContent = '';
    })
    .then(data => alert(data))
};

submitBtn.addEventListener('click', onCreateUser);
emailElem.addEventListener('change', onEmailChange);
nameElem.addEventListener('change', onUserNameChange);
passwordElem.addEventListener('change', onPasswordChange);
