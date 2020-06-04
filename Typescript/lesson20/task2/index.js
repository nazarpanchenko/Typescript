export class Vehicle {
    constructor(name, numberOfWheels) {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }
    
    move() {
        console.log(`${this.name} is moving`);
    }

    stop() {
        console.log(`${this.name} stopped`);
    }
}

export class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log(`${this.name} lifting anchor up`);
        Vehicle.move();
    }

    stop() {
        console.log(`${this.name} lifting anchor down`);
        Vehicle.stop();
    }
}

const ship = new Ship('Argo', false);
