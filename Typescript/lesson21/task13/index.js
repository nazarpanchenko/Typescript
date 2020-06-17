export const getSection = (num) => {
   let span = document.querySelector('span');
   let div = document.querySelector('.box');

   let spanValue = `span[data-number="${num}"]`;

   let dataSection = div.dataset.section;

   if (+span.dataset.number === num) return dataSection;
};

console.log(getSection(5));
