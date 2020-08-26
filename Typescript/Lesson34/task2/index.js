const baseUrl = 'https://5f4107e4a5e9db0016302376.mockapi.io/api/v1/users';

export const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
};

export const getUserById = userId => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'GET'
    })
    .then(response => response.json());
};

export const createUser = user => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
};

export const updateUser = (userId, user) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
};

export const deleteUser = userId => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });
};

getUsersList().then(usersList => {
    console.log(usersList);
});

getUserById('2').then(userData => {
    console.log(userData);
});

const newUserData = {
    email: 'cool@email.com',
    firstName: 'Iron',
    lastName: 'Man',
    age: 42
};
createUser(newUserData).then(() => {
    console.log('User created');
});

const updatedUserData = {
    email: 'new@email.com',
    firstName: 'John',
    lastName: 'Doe',
    age: 17
};
updateUser('1', updatedUserData).then(() => {
    console.log('User updated');
});

deleteUser('2').then(() => {
    console.log('User deleted');
});
