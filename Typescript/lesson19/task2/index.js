export const getOwnProps = (obj) => {
   let props = [];

   for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) props.push(prop);
   }

   return props;
};

let ship = {
   hasWheels : false,
   isMoving : true,
   liftAnchorUp : function() {

   },
   liftAnchorDown : function() {

   }
};
