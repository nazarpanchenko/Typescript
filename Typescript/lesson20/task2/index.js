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
    constructor(maxSpeed) {
        super(name);
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
    }

    stop() {
        console.log(`${this.name} lifting anchor down`);
        super.stop();
    }
}

const ship = new Ship('Argo', 18);

ship.move();
