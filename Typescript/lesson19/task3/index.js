const user = {
    firstName : 'John',
    lastName : 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

user.setFullName('John', 'Doe');
user.getFullName();

export default user;
