export const createArrayOfFunctions = (arrLength) => {
    if (isNaN(arrLength)) return null;  

    if (!arrLength) return undefined;
    
    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr[i] = function() {
            return i;
        }
    }

    return arr;
};
