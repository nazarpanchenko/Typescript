let memory = 0;

export const createCalculator = () => {
    function add(value) {
        memory += value;

        return memory;
    }

    function decrease(value) {
        memory -= value;

        return memory;
    }

    function reset() {
        memory = 0;

        return memory;
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
