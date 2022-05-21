class TransactionData {
    constructor() {
        this.transactionHistory = []
    }


    pushTransaction(item) {
        this.transactionHistory.push(item);
    }

    getTransaction() {
        return this.transactionHistory
    }

}


class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new TransactionData();
        }
    }

    getInstance() {
        return Singleton.instance;
    }

}


module.exports = Singleton;