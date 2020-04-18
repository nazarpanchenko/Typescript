export const createArrayOfFunctions = (arrLength) => {
    if (!arrLength) return [];
    
    if (isNaN(arrLength)) return null;  
    
    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr[i] = function() {
            return i;
        }
    }

    return arr;
};
