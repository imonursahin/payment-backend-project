const express = require('express');
const router = express.Router();
const AccountData = require('../data/account_data');
const TransactionData = require('../data/transaction_data');

let accountData = new AccountData().getInstance()
let transactionHistory = new TransactionData().getInstance()


// Withdraw  
router.post('/', (req, res, next) => {

    let accountInfo = accountData.getAccount()

    let accountNumber = req.body.accountNumber
    let amount = req.body.amount

    let accountIndex = accountInfo.findIndex(item => item.accountNumber == accountNumber)

    // Current Date
    var date = new Date((dt = new Date()).getTime() - dt.getTimezoneOffset() * 60000)
        .toISOString()
        .replace(/(.*)T(.*)\..*/, '$1 $2')

    if (accountIndex >= 0) {

        if (accountInfo[accountIndex].accountType == "individual") {
            accountInfo[accountIndex].balance -= amount
            accountData.updateAccount(accountInfo)
            transactionHistory.pushTransaction({
                accountNumber: accountNumber,
                amount: amount,
                transactionType: "withdraw",
                createdAt: date
            })

            res.status(200).json({
                message: "Succesfuly",

            })

        }

    } else if (accountInfo[accountIndex].balance <= 0) {
        {
            res.status(400).json({
                message: "Insufficient balance"
            })
        }
    }

    else {
        res.status(400).json({
            message: "Account not found"
        })
    }





});


module.exports = router;