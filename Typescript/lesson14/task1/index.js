'use strict';

let message = 'Just learn it!';

export function sendMessage (name) {
    const sender = 'Gromcode';

    console.log(`${name}, ${message}. You ${sender}`);
}

export function setMessage(text) {
    message = text;
}

sendMessage('Ann');

setMessage('Good job')