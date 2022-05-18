class AccountData {
    constructor() {
        this.account = []
        this.balance = 0
    }

    pushAccount(item) {
        this.account.push(item);
    }

    getAccount() {
        return this.account
    }

    setBalance(value) {
        this.balance = value
    }

    getBalance() {
        return this.balance
    }

    updateAccount(accountList) {
        this.account = [];
        this.account = accountList;
    }
}


class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new AccountData();
        }
    }

    getInstance() {
        return Singleton.instance;
    }

}


module.exports = Singleton;