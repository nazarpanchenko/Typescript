export const user = {
    firstName : "John",
    lastName: 'Doe',
    getFullName : function() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName : function(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
