const baseUrl = 'https://5f4107e4a5e9db0016302376.mockapi.io/api/v1/allUsers';

const formInput = document.querySelector('.form-input');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const newUser = {
    email : 'example111@gmail.com',
    userName : 'John Doe',
    password : '1234567890'
};

// document.forms['.login-form'].addEventListener('.submit-button', () => {
//     document.forms['.login-form'].reportValidity();
// }, false);

const onInputChange = event => {
    if (!event.target.dataset.id) return;

    event.target.value = '';
};

const onCreateUser = newUser => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if (!response.ok) {
            errorText.innerHTML = 'Failed to create user';
        } 
        else {
            alert(response.json());
            formInput.innerHTML = '';
        }
    });
};

submitBtn.addEventListener('click', onCreateUser);
formInput.addEventListener('change', onInputChange);
