const handleClick = (event) => {
    console.log(event.target.dataset.pageNumber);
};

const pagination = document.getElementsByTagName("button");

for (let i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener('click', handleClick);
}
