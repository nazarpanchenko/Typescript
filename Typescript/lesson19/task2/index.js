export const getOwnProps = (obj) => {
    let props = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            props.push(key);
        }
    }

    return Object.keys(props);
};
