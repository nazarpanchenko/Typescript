let message = 'Just learn it!';

export function setMessage(text) {
    message = text;
}

export function sendMessage (name) {
    const sender = 'Gromcode';

    setMessage('Good job!');

    console.log(`${name}, ${message} Your ${sender}`);
}
