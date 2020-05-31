export const getOwnProps = (obj) => {
   let props = [];

   for (let prop in obj) {
      props.push(prop);
   }

   return Object.keys(props);
};
