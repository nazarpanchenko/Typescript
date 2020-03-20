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

const messenger1 = createMessenger(),
    messenger2 = createMessenger();

messenger1.setSender('Gromcode');
messenger1.sendMessage('Bob');
messenger2.setMessage('Good job!');
messenger2.sendMessage('Bob');