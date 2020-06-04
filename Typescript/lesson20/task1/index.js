export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
    
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    
    setAge(age) {
       this.age = age;
    
       if (this.age >= 25) this.requestNewPhoto();
    
       return this.age < 0 ? false : this.age;
    }

    createEmpty(name, age) {
        this.name = '';
        this.age = null;
    }
}

const user = new User('Tom', 17);
