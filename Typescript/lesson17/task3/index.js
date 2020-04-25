export const defer = (func, ms) => {
    return function() {
        setTimeout(func, ms);
    }
};

const sayHi = () => {
    console.log('Hi');
};

sayHi();