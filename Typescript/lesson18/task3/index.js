export const sumOfSquares = () => {
    return [].map.call(arguments, num => num * num)
        .reduce((acc, num) => acc + num, 0);
};
