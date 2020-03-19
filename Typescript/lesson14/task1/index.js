'use strict';

let message = 'Just learn it!';

const sendMessage = (name) => {
    const sender = 'Gromcode';

    console.log(name + message);
};

function setMessage(text) {
    message = text;
}

sendMessage('Tom');

setMessage('Hello!');

sendMessage('Tom');
