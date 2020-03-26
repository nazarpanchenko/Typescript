export const createCalculator = () => {
    let memory = 0;
    
    const add = (value) => {
        memory += value;

        return memory;
    };

    const decrease = (value) => {
        memory -= value;

        return memory;
    };

    const reset = () => {
        memory = 0;
    };

    const getMemo = () => {
        return memory;
    }

    return {
        addMemory : add,
        decreaseMemory : decrease,
        resetMemory : reset,
        getMemory : getMemo
    }
};
