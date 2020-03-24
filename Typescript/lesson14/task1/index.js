let message = 'Just learn it!';

export function setMessage(text) {
    message = text;
}

export function sendMessage (name) {
    const sender = 'Gromcode';

    console.log(`${name}, ${message} Your ${sender}`);

    setMessage('Good job!');

    console.log(`${name}, ${message} Your ${sender}`);
}
