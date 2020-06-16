export const finishList = () => {
    let list = document.querySelector('.list');
    
    let listItem1 = document.createElement('li');
    listItem1.textContent = '1';
    list.prepend(listItem1);

    let listItem8 = document.createElement('li');
    listItem8.textContent = '8';
    list.append(listItem8);

    let listItem5 = document.querySelector('.special');

    let listItem4 = document.createElement('li');
    listItem4.textContent = '4';
    listItem5.before(listItem4);

    let listItem6 = document.createElement('li');
    listItem6.textContent = '6';
    listItem5.after(listItem6);
};
