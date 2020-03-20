'use strict';

let message = 'Just learn it!',
    sender = 'Gromcode';

export function sendMessage (name) {
    console.log(`${name}, ${message} Your ${sender}`);
}

export function setMessage(text) {
    message = text;
}

sendMessage('Ann');

setMessage('Good job!');

sendMessage('Ann');
