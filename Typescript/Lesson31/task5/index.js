export const delay = delayTime => {
    return new Promise((resolve) => {
        setTimeout(resolve, delayTime);
    });
};

delay(3000)
    .then(console.log('Done'));
