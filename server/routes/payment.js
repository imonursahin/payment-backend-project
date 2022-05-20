const express = require('express');
const { accounts } = require('./account');
const router = express.Router();
const AccountData = require('./account_data');

let accountData = new AccountData().getInstance()

// Payment
router.post('/', (req, res, next) => {
    let accountInfo = accountData.getAccount()

    let senderAccount = req.body.senderAccount
    let receiverAccount = req.body.receiverAccount
    let amount = req.body.amount

    let senderAccountIndex = accountInfo.findIndex(item => item.accountNumber == senderAccount)
    let receiverAccountIndex = accountInfo.findIndex(item => item.accountNumber == receiverAccount)

    if (senderAccountIndex != null && receiverAccountIndex != null) {
        if (accountInfo[senderAccountIndex].accountType == "individual" && accountInfo[receiverAccountIndex].accountType == "corporate") {

            accountInfo[senderAccountIndex].balance -= amount
            accountInfo[receiverAccountIndex].balance += amount
            accountData.updateAccount(accountInfo)
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
