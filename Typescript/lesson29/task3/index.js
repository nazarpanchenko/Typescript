export const printing = () => {
    console.log(1);
    setTimeout(() => console.log(4), 0);
    console.log(2);
    setTimeout(() => console.log(5), 1000);
    console.log(3);

};

printing();
