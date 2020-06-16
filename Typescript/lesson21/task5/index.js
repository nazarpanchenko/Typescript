export const setTitle = (text) => {
    const titleElem = document.querySelector('.title');
    titleElem.innerHTML(text);

    return titleElem;
};
