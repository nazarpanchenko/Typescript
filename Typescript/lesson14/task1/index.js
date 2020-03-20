'use strict';

let message = '';

export function setMessage(text) {
    message = text;
}

export function sendMessage (name) {
    let sender = 'Gromcode';
    
    console.log(`${name}, ${message} Your ${sender}`);
}

setMessage('Just learn it!');
sendMessage('Ann');

setMessage('Good job!');
sendMessage('Ann');
