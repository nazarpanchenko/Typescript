const getOwnProps = obj => {
   const result = [];

   for(let prop in obj) {
       if (obj.hasOwnProperty(prop)) {
           result.push(prop);
       }
   }

   return result
       .filter(prop => typeof obj[prop] !== 'function');
};

export const getOwnProps;