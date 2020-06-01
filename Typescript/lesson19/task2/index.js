export const getOwnProps = (obj) => {
   let props = [];

   for (let prop in obj) {
      if (obj.hasOwnProperty(prop) && typeof prop !== 'function') {
         props.push(prop);
      }
   }

   return props;
};

const vehicle = {
   isMoving : false,
   move() {
      console.log(`${this.name} moving`);
   },
   stop() {
      console.log(`${this.name} stopped`);
   }
};

const ship = {
   name : 'Aurora',
   hasWheels : false,
   liftAnchorUp : function() {
      console.log('Lifting anchor up');
   },
   liftAnchorDown : function() {
      console.log('Lifting anchor down');
   }
};

Object.setPrototypeOf(ship, vehicle);

getOwnProps(ship);
