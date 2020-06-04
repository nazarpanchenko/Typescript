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
        super.move();
        console.log(`${this.name} lifting anchor up`);
    }

    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
}

const ship = new Ship('Argo', 18);

ship.move();
