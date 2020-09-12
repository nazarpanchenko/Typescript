const baseUrl = 'https://5f4107e4a5e9db0016302376.mockapi.io/api/v1/allUsers';
let isFormInputValid;

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const emailElem = document.querySelector('#email');
const userNameElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');

const onFormInputChange = () => {
    isFormInputValid = form.reportValidity();
    if (isFormInputValid) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }

    errorElem.textContent = '';
};

const clearForm = () => {
    emailElem.value = '';
    userNameElem.value = '';
    passwordElem.value = '';
};

const onError = () => {
    errorElem.textContent = 'Failed to create user';
};

const createUser = userData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
};

const onFormSubmit = () => {
    const user = {
        email : userNameElem.value,
        userName : userNameElem.value,
        password : passwordElem.value
    };
    createUser(user)
        .then(response => response.json())
        .then((responseData) => {
            clearForm();
            onFormInputChange();
            alert(JSON.stringify(responseData));
        })
        .catch(() => onError());
};

form.addEventListener('submit', onFormSubmit);
emailElem.addEventListener('change', onFormInputChange);
userNameElem.addEventListener('change', onFormInputChange);
passwordElem.addEventListener('change', onFormInputChange);
