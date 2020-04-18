export const createArrayOfFunctions = (arrLength) => {
    if (isNaN(arrLength)) {
      return null;  
    } 
    else if (!arrLength) {
        return [];
    }

    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr[i] = function() {
            return i;
        }
    }

    return arr;
};
