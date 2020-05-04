export const bind = (func, context, args) => {
    let newFunc = func.apply(context, args);

    return newFunc;
};

const newFunc = () => {

};

bind(newFunc, this, []);