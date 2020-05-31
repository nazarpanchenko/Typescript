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
   this.age = age;

   if (this.age >= 25) this.requestNewPhoto();

   return this.age < 0 ? false : this.age;
}

const user = new User('Tom', 17);
