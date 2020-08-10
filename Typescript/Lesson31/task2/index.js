export const asyncCalculator = numbr => new Promise((resolve) => {
    setTimeout(() => {
        console.log(`Initial value: ${numbr}`);
        resolve(num);
    }, 500);
})
    .then(value => new Promise((resolve) => {
        setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
        }, 500);
    }));

const p = asyncCalculator(5)
    .then(value => {
        const result = value * 2;
        console.log(`Doubled value: ${result}`);
        return result;
    })
    .then(value => console.log(value));
