export const bind = (func, context) => {
    func.apply(context, []);
};
