'use strict';

let message = 'Just learn it!';

export function sendMessage (name) {
    const sender = 'Gromcode';

    console.log(`${name}, ${message}. You ${sender}`);
}

function setMessage(text) {
    message = text;
}

sendMessage('Tom');

setMessage('Hello!');

sendMessage('Tom');