'use strict';

let message = 'Just learn it!',
    sender = 'Gromcode';

export function setMessage(text) {
    message = text;
}

export function sendMessage (name) {
    console.log(`${name}, ${message} Your ${sender}`);
}

sendMessage('Ann');

setMessage('Good job!');

sendMessage('Ann');
