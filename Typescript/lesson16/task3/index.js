export const createArrayOfFunctions = (arrLength) => {
    if (isNaN(arrLength)) return null;

    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        if (!arrLength) return [];

        arr[i] = function() {
            return i;
        }
    }

    return arr;
};
