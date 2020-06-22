const handleClick = (event) => {
    const clicked = event.target.textContent;
    console.log(clicked);
};

const btn = document.getElementsByTagName("button");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', handleClick);
}
