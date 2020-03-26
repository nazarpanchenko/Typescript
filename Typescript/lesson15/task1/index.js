export const createCalculator = () => {
    let memory = 0;
    
    const add = (value) => {
        memory += value;
    };

    const decrease = (value) => {
        memory -= value;
    };

    const reset = () => {
        memory = 0;
    };

    const getMemo = () => {
        return memory;
    }

    const addCounter = add(8);
    const decreaseCounter = decrease(3);

    return {
        addMemory : addCounter,
        decreaseMemory : decreaseCounter,
        resetMemory : reset,
        getMemory : getMemo
    }
};
