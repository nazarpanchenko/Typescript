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
