const createMessenger = () => {

    function sendMessage(name) {
        const sender = 'Gromcode';

        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    return {
        sendMessage,
        setMessage
    };
};