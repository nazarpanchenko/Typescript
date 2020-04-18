export const createArrayOfFunctions = (arrLength) => {
    if (isNaN(arrLength) || !arrLength) return null;

    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr[i] = function() {
            return i;
        }
    }

    return arr;
};
