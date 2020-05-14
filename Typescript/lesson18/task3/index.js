export const sumOfSquares = () => {
    return [...arguments].reduce((acc, elem) => {        
        return (acc + elem) * 2;
    }, 0);
};

sumOfSquares(1, 2, 3, 4);
