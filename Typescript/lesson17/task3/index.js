export const defer = (func, ms) => {
    return function() {
        setTimeout(() => func(...arguments), ms);
    }
};

const sum = (a, b) => {
    console.log(a + b);
};

const deferredSum = defer(sayHi, 1000);

deferredSum(1, 4);
