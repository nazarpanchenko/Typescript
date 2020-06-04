export class Wallet {
    _balance = 0;

    getBalance() {
        return this._balance;
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

wallet.getBalance();
wallet.deposit(45);
wallet.getBalance();
wallet.withdraw(134);
