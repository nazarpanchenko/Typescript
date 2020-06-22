const checkbox = document.querySelector('.task-status');

checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        console.log(true);
    } else {
        console.log(false);
    }
});
