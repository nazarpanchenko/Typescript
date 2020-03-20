const createMessenger = () => {
    let message = 'Just learn it!',
        sender = 'Gromcode';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(text) {
        sender = text;
    }

    return {
        sendMessage,
        setMessage,
        setSender
    };
};

const messenger = createMessenger();

messenger.setSender('Gromcode');
messenger.sendMessage('Bob');
messenger.setMessage('Good job!');
messenger.sendMessage('Bob');

export default createMessenger;
