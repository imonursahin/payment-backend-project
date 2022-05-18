const express = require('express');
const { accounts, balance } = require('./account');
const router = express.Router();
const AccountData = require('./account_data');

let accountData = new AccountData().getInstance()


// Deposit - yatırma
router.post('/', (req, res, next) => {

    let balance = accountData.getBalance()

    let accountInfo = accountData.getAccount()


    let accountNumber = req.body.accountNumber
    let amount = req.body.amount

    let accountIndex = accountInfo.findIndex(item => item.accountNumber == accountNumber)

    if (accountIndex != null) {
        accountInfo[accountIndex].balance += amount
        accountData.updateAccount(accountInfo)
        res.status(200).json({
            message: "Succesfuly",

        })

    } else {
        res.status(404).json({
            message: "Account not found"
        })
    }



})


module.exports = router;