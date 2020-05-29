export const user = {
    firstName : 'John',
    lastName : 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

user.setFullName('Tom');
