const baseUrl = 'https://5f4107e4a5e9db0016302376.mockapi.io/api/v1/users';

export const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
};

export const getUserById = userId => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'GET'
    });
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
