export function sumOfSquares() {
    return [].map.call(arguments, num => num * num)
        .reduce((acc, num) => acc + num, 0);
}

sumOfSquares([1, 2, 3, 4]);
