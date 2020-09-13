const form = document.querySelector('form');
const emailElem = document.querySelector('#email');
const userNameElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');

const createUser = userData => {
    const baseUrl = 'https://5f4107e4a5e9db0016302376.mockapi.io/api/v1/allUsers';
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
};

const clearForm = () => {
    emailElem.value = '';
    userNameElem.value = '';
    passwordElem.value = '';
};

const onError = () => {
    let errorElem = document.querySelector('.error-text');
    errorElem.textContent = 'Failed to create user';
};

const onFormInputChange = () => {
    const submitBtn = document.querySelector('.submit-button');
    let isFormInputValid = form.reportValidity();
    let errorElem = document.querySelector('.error-text');

    if (isFormInputValid) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
    errorElem.textContent = '';
};

const onFormSubmit = () => {
    let emailElem = document.querySelector('#email');
    let userNameElem = document.querySelector('#name');
    let passwordElem = document.querySelector('#password');
    const user = {
        email : emailElem.value,
        userName : userNameElem.value,
        password : passwordElem.value
    };

    createUser(user)
        .then(response => response.json())
        .then((responseData) => {
            clearForm();
            alert(JSON.stringify(responseData));
        })
        .catch(() => onError());
};

form.addEventListener('submit', onFormSubmit);
emailElem.addEventListener('input', onFormInputChange);
userNameElem.addEventListener('input', onFormInputChange);
passwordElem.addEventListener('input', onFormInputChange);
