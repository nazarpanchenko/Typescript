export const bind = (func, context, args) => {
    let newFunc = func.apply(context, args);

    return newFunc;
};

let context = {};

function func() {}

let result = bind(func, context, []);