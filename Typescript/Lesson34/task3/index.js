const form = document.querySelector('form');

form.addEventListener('submit', () => {
    form.reportValidity();
}, false);

const baseUrl = 'https://5f4107e4a5e9db0016302376.mockapi.io/api/v1/allUsers';

const formInput = document.querySelectorAll('.form-input');
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
    uer.userName = userNameElem.value;
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
        }
    })
    .then((data) => {
        alert(data);
        formInput.textContent = '';
    })
};

submitBtn.addEventListener('click', onCreateUser);
