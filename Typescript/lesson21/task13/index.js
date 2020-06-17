export const getSection = (num) => {
   let elem = document.querySelector(`span[data-number="${num}"]`);
   let elemParent = elem.parentNode;

   if (+(elem.dataset.number) === num) return elemParent.dataset.section;
};

getSection(5);
