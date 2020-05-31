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
    return this.age < 0 ? false :
        this.age >= 25 ? 
            console.log(`New photo request was sent for ${this.name}`) : this.age;
}

const user = new User('Tom', 17);
