export const manageClasses = () => {
    let one = document.querySelector('.one');
    one.classList.add('selected');

    let two = document.querySelector('.two');
    two.classList.remove('selected');

    let three = document.querySelector('.three');
    three.classList.toggle('three_done');

    let four = document.querySelector('.four');
    if (four.classList.contains('some-class')) four.classList.add('another-class');
};
