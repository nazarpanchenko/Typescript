let message = 'Just learn it!';

export function setMessage(text) {
    message = text;
}

setMessage('Good job!');

export function sendMessage (name) {
    const sender = 'Gromcode';

    console.log(`${name}, ${message} Your ${sender}`);
}
