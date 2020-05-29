export const user = {
    firstName : 'John',
    lastName : 'Doe',
    get : function fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set : function fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
