class Order {
    constructor(price, city, type) {

    }

    id = +Math.random();
    dateCreated = new Date();
    isConfirmed = false;
    dateConfirmed = new Date();

    checkPrice() {
        return this.price > 1000 ? true : false;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType() {
        return this.type === 'Buy'|| this.type === 'Sell' ? true : false;
    }
}  
