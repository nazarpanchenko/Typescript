'use strict';

let message = '',
    sender = 'Gromcode';

export function setMessage(text) {
    message = text;
}

export function sendMessage (name) {
    console.log(`${name}, ${message} Your ${sender}`);
}

setMessage('Just learn it!');
sendMessage('Ann');

setMessage('Good job!');
sendMessage('Ann');
