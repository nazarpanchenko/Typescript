const checkbox = document.querySelector('.task-status');

checkbox.addEventListener('click', () => {
    if (checkbox.checked)  {
        console.log('true');
    } else {
        console.log('false');
    }
});
