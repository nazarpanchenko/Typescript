import { sendMessage, setMessage } from './index';

it ('should check if message is correct', () => {
    sendMessage('Ann');
});

it ('should check if new message is set correctly', () => {
    setMessage('Good job!');
});

it ('should check if new message is displayed correctly', () => {
    sendMessage('Ann');
});
