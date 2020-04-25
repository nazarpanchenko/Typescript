export const defer = () => {
    return function() {
        setTimeout(func, ms);
    }
};

const sayHi = () => {
    console.log('Hi');
};

sayHi();