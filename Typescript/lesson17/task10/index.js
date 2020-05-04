export const bind = (func, context, args) => {
    let result = func.apply(context, args);

    return result;
};
