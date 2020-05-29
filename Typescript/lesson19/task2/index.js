export const getOwnProps = (obj) => {
    let props = [];

    for (let key in obj) {
        props.push(obj);
    }

    return props;
};
