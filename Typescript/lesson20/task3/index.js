export class Wallet {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds');

            return;
        }

        this._balance -= amount;
    }
}

const wallet = new Wallet();
