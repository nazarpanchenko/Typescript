export const event = {
    guests : [
        { name : 'Tom', age : 17, email: 't@gmail.com' },
        { name : 'Bob', age : 18, email : 'b@gmail.com' }
    ],
    message : 'Welcome to the party!',
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                text: `Dear ${name}! ${this.message}`,
                email
            }));
    }
};

event.getInvitations();
