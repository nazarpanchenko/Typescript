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

    return {
        add : add,
        decrease : decrease,
        reset : reset,
        get : getMemo
    }
};
