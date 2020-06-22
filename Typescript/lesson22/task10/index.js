const pagination = document.getElementsByTagName("button");

const handleClick = (event) => {
    console.log(event.target.data);
};

for (let i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener('click', handleClick);
}

pagination.addEventListener('click', handleClick);
