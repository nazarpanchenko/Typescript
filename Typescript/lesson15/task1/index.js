export const createCalculator = () => {
    function add(value) {
        let memory = 0;
        memory += value;

        return memory;
    }

    function decrease(value) {
        let memory = 0;
        memory -= value;

        return memory;
    }

    function reset() {
        let memory = 0;

        return memory;
    }

    function getMemo() {
        let memory = 0;
        
        return memory;
    }

    return {
        addMemory : add,
        decreaseMemory : decrease,
        resetMemory : reset,
        getMemory : getMemo
    }
};
