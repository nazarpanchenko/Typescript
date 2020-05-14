export const sumOfSquares = () => {
    return [...arguments].reduce((acc, elem) => {
        return (acc * acc) + (elem * elem);
    }, 0);
};

sumOfSquares(1, 2, 3, 4);
