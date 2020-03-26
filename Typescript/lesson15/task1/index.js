export const createCalculator = () => {
    let memory = 0;
    
    const add = (value) => {
        let memory = 0;
        memory += value;

        return memory;
    };

    const decrease = (value) => {
        let memory = 0;
        memory -= value;

        return memory;
    };

    const reset = () => {
        memory = 0;
        return memory;
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
