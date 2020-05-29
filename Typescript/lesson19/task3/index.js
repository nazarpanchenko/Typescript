export const user = {
    firstName : 'John',
    lastName : 'Doe',
    get : function fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set : function fullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
