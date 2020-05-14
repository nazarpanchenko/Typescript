export const sumOfSquares = () => {
    return [...arguments].reduce((acc, elem) => {
        let res = elem * elem,
            out = 0;
        
        out += res;
        
        return out;
    }, 0);
};

sumOfSquares(1, 2, 3, 4);
