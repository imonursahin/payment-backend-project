const express = require('express');
const router = express.Router();
const AccountData = require('../data/account_data');
const TransactionData = require('../data/transaction_data');


let accountData = new AccountData().getInstance()
let transactionHistory = new TransactionData().getInstance()


// Deposit
router.post('/', (req, res, next) => {

    let accountInfo = accountData.getAccount()


    let accountNumber = req.body.accountNumber
    let amount = parseFloat(req.body.amount.toFixed(2))


    // Find user index
    let accountIndex = accountInfo.findIndex(item => item.accountNumber == accountNumber)


    // Current Date
    var date = new Date((dt = new Date()).getTime() - dt.getTimezoneOffset() * 60000)
        .toISOString()
        .replace(/(.*)T(.*)\..*/, '$1 $2')


    if (accountIndex >= 0) {

        if (accountInfo[accountIndex].accountType == "individual") {
            accountInfo[accountIndex].balance += amount
            accountData.updateAccount(accountInfo)
            transactionHistory.pushTransaction({
                accountNumber: accountNumber,
                amount: amount,
                transactionType: "deposit",
                createdAt: date
            })

            res.status(200).json({
                message: "Succesfuly",

            })

        } else {
            res.status(400).json({
                message: "Only individual accounts can deposit funds"
            })
        }

    } else {
        res.status(400).json({
            message: "Account not found"
        })
    }



})


module.exports = router;