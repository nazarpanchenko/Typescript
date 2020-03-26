export const createCalculator = () => {
    let memory = 0;
    
    const add = (value) => {
        let memory = 0;
        memory += value;
    };

    const decrease = (value) => {
        let memory = 0;
        memory -= value;
    };

    const reset = () => {
        let memory = 0;
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
