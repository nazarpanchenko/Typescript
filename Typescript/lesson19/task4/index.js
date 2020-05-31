export function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
}

User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`);
}

User.prototype.setAge = function() {
    if (this.age >= 25) {
        console.log(`New photo request was sent for ${this.name}`);
    }

    if (this.age < 0) {
        return false;
    } else {
        this.age = age;
        return this.age;
    }
}

const user = new User('Tom', 17);
