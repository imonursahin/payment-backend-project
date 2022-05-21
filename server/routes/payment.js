const express = require('express');
const router = express.Router();
const AccountData = require('../data/account_data');
const TransactionData = require('../data/transaction_data');

let accountData = new AccountData().getInstance()
let transactionHistory = new TransactionData().getInstance()

// Payment
router.post('/', (req, res, next) => {
    let accountInfo = accountData.getAccount()

    let senderAccount = req.body.senderAccount
    let receiverAccount = req.body.receiverAccount
    let amount = req.body.amount

    let senderAccountIndex = accountInfo.findIndex(item => item.accountNumber == senderAccount)
    let receiverAccountIndex = accountInfo.findIndex(item => item.accountNumber == receiverAccount)


    // Current Date
    var date = new Date((dt = new Date()).getTime() - dt.getTimezoneOffset() * 60000)
        .toISOString()
        .replace(/(.*)T(.*)\..*/, '$1 $2')

    if (senderAccountIndex >= 0 && receiverAccountIndex >= 0) {
        if (accountInfo[senderAccountIndex].accountType == "individual" && accountInfo[receiverAccountIndex].accountType == "corporate") {

            accountInfo[senderAccountIndex].balance -= amount
            accountInfo[receiverAccountIndex].balance += amount
            accountData.updateAccount(accountInfo)
            transactionHistory.pushTransaction({
                accountNumber: accountNumber,
                amount: amount,
                transactionType: "payment",
                createdAt: date
            })
            res.status(200).json({
                message: "Succesfuly",

            })

        } else {
            res.status(400).json({
                message: "Payments are made from an individual account to a corporate account only"
            })
        }



    } else {
        res.status(400).json({
            message: "Account not found"
        })
    }


});


module.exports = router;
