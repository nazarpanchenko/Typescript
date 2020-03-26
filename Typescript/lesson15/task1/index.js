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

    const calculator1 = createCalculator().add(8);
    const calculator2 = createCalculator().decrease(3);

    return {
        add : add,
        decrease : decrease,
        reset : reset,
        get : getMemo
    }
};
