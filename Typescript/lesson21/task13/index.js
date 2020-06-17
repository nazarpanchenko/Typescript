export const getSection = (num) => {
   let elem = document.querySelectorAll(`span[data-number="${num}"]`);
   console.log(elem);
   let elemParent = elem.parentNode;
   console.log(elemParent);

   if (+(elem.dataset.number) === num) return elemParent.dataset.section;
};

console.log(getSection(5));
