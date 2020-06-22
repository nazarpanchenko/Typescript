const btn = document.querySelector('.single-use-btn');
let clicked = 0;

const click = () => {
    console.log('clicked');
    ++clicked;
};

btn.addEventListener('click', () => {
    click();

    if (clicked === 1) break;
});
