export const user = {
    firstName : "John",
    lastName: 'Doe',
    getFullName : function() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName : function(fullName) {
        fullName = fullName.split(' ');
        this.firstName = fullName[0];
        this.lastName = fullName[1];
    }
};
