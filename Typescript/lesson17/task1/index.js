const user = {
    firstName : 'John',
    lastName : 'Doe',
    getFullName()  {
        console.log(`${this.firstName} ${this.lastName}`);
    } 
};

export default user;