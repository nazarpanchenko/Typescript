const form = document.querySelector('form');
const emailElem = document.querySelector('#email');
const userNameElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');
const errorElem = document.querySelector('.error-text');

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
    errorElem.textContent = 'Failed to create user';
};

const onFormInputChange = () => {
    const submitBtn = document.querySelector('.submit-button');
    let isFormInputValid = form.reportValidity();

    if (isFormInputValid) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
    errorElem.textContent = '';
};

const onFormSubmit = () => {
    // const user = {
    //     email : emailElem.value,
    //     userName : emailElem.value,
    //     password : passwordElem.value
    // };

    let userFormData = new FormData(form);
    userFormData.set('email', emailElem.value);
    userFormData.set('userName', emailElem.value);
    userFormData.set('password', passwordElem.value);

    createUser(userFormData)
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
