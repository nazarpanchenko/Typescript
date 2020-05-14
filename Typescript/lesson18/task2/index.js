export const wallet = {
    transactions : [1, 5, 8, 0 , 3, 4],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    }
};

wallet.getMax();
wallet.getMin();
