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

    const addCounter = add(8);
    const decreaseCounter = decrease(3);

    return {
        add : addCounter,
        decrease : decreaseCounter,
        reset : reset,
        get : getMemo
    }
};
