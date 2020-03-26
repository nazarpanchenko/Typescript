export const createCalculator = () => {
    let memory = 0;
    
    function add(value) {
        memory += value;
    }

    function decrease(value) {
        memory -= value;
    }

    function reset() {
        memory = 0;
    }

    function getMemo() {
        return memory;
    }

    return {
        addMemory : add,
        decreaseMemory : decrease,
        resetMemory : reset,
        getMemory : getMemo
    }
};
