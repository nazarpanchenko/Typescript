export const getTitle = () => {
    const elem = document.querySelector('.title').textContent;

    return elem;
};

export const getDescription = () => {
    const elem = document.querySelector('.about').innerText;

    return elem;
};

export const getPlans = () => {
    const elem = document.querySelector('.plans').innerHTML;

    return elem;
};

export const getGoal = () => {
    const elem = document.querySelector('.goal').outerHTML;

    return elem;
};
