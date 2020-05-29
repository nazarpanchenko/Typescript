const user = {
    firstName : 'John',
    lastName : 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

export default user;
