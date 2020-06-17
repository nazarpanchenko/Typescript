export const getSection = (num) => {
   let elem = document.querySelectorAll('span');
   // let searchTarget = `span[data-number="${num}"]`;

   for (let i = 0; i < elem.length; i++) {
      if (+(elem[i].dataset.number) === num) {
         let elemParent = elem[i].parentNode;
         return elemParent.dataset.section;
      }
   }
};

getSection(5);
