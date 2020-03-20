'use strict';

let message = '',
    sender = 'Gromcode';

export function setMessage(text) {
    message = text;

    return message;
}

export function sendMessage (name) {
    console.log(`${name}, ${setMessage(message)} Your ${sender}`);
}

setMessage('Just learn it!');
sendMessage('Ann');

setMessage('Good job!');
sendMessage('Ann');
