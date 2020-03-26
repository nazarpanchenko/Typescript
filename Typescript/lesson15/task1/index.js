export const createCalculator = () => {
    let memory = 0;
    
    function add (value) {
        memory += value;
    };

    function decrease(value) {
        memory -= value;
    };

    function reset() {
        memory = 0;
    };

    function getMemo() {
        return memory;
    }

    const addCounter = add();
    const decreaseCounter = decrease();

    return {
        addMemory : addCounter,
        decreaseMemory : decreaseCounter,
        resetMemory : reset,
        getMemory : getMemo
    }
};
