export class Order {
    constructor(price, city, type) {
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = '';
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = new Date();
    }

    checkPrice() {
        return this.price > 1000 ? true : false;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = this.dateCreated;
    }

    isValidType() {
        return this.type === 'Buy'|| this.type === 'Sell' ? true : false;
    }
}  

const order = new Order(1000, 'London', 'Buy');
