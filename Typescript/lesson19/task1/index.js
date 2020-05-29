export const vehicle = {
    name : 'Argo',
    move() {
        console.log(`${vehicle.name} is moving`);
    },
    stop() {
        console.log(`${vehicle.name} stopped`);
    }
};

export const ship = {
    name : 'Argo',
    hasWheels : false,
    startMachine() {
        console.log(`${ship.name} lifting anchor up`);
    },
    stopMachine() {
        console.log(`${ship.name} lifting anchor down`);
    },
    __proto__ : vehicle
};
