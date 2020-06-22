const btn = document.querySelector('.single-use-btn');
let clicked = 0;

const click = () => {
    ++clicked;

    if (clicked === 1) {
        btn.removeEventListener('click', click);
    }

    console.log('clicked');
};

btn.addEventListener('click', click);
