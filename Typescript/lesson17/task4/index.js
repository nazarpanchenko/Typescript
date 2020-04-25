
const student = {
    name: 'Tom',
};

export function sayName() {
    console.log(this.name);
}


sayName.call(student, 'Tom');


const anotherName = {
    name : 'Bruce'
};
sayName.call(anotherName, 'Bruce');



const company = {
    companyName: 'Microsoft'
};

function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}


greeting.call(company, 'Bob', 'Marley', 'Microsoft');


const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv'
};

function getPopulation(population) {
    return `Population in ${this.countryName} is ${population}`;
}


getPopulation.call(country, 43000, 'Ukraine');


/* ===> 4 <=== */
const transaction = {
    amount: 1200,
    operation: 'sell',
    currency: 'USD',
    exchange: 'NYSE',
    printTransaction() {
        console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
    }
}

const anotherTransaction = {
    amount: 400,
    operation: 'buy',
    currency: 'USD',
    exchange: 'NASDAQ',
};


transaction.printTransaction.call(anotherTransaction, 400, 'USD', 'buy', 'NASDAQ');
