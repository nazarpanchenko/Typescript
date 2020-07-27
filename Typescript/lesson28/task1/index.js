const calc = initValue => {
    let result;

    const calculator = {
        add(value) {
            result += initValue;
            return this;
        },
        mult(value) {
            result *= initValue;
            return this;
        },
        substract(value) {
            result *= initValue;
            return this;
        },
        divide(value) {
            result *= initValue;
            return this;
        },
        result() {
            return result;
        }
    };

    return calculator;
};

const result = calc(3).mult(2).div(4).subtract(5).result();
