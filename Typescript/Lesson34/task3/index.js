const baseUrl = 'https://5f4107e4a5e9db0016302376.mockapi.io/api/v1/allUsers';

const form = document.querySelector('form');
const formInput = document.querySelector('.form-input');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');
const emailElem = document.querySelector('#email');
const userNameElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');

const user = {
    email : '',
    userName : '',
    password : ''
};

const onCreateUser = () => {
    user.email = emailElem.value;
    user.userName = userNameElem.value;
    user.password = passwordElem.value;

    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (!response.ok) {
            errorText.textContent = 'Failed to create user';
        } else {
            return response.json();
        }
    })
    .then((data) => {
        alert(data);
        emailElem.textContent = '';
        userNameElem.textContent = '';
        passwordElem.textContent = '';
    })
};

const onFormInputChange = () => {
    let isFormInputValid = form.reportValidity();
    errorText.textContent = '';

    if (isFormInputValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
};

submitBtn.addEventListener('submit', onCreateUser);
emailElem.addEventListener('change', onFormInputChange);
userNameElem.addEventListener('change', onFormInputChange);
passwordElem.addEventListener('change', onFormInputChange);
