const express = require('express');
const router = express.Router();
const AccountData = require('./account_data');

let accountData = new AccountData().getInstance()

let accountInfo = accountData.getAccount()
let balance = accountData.getBalance()

// Create Account

router.post('/', (req, res, next) => {


    let accountNumber = req.body.accountNumber
    let currencyCode = req.body.currencyCode.toUpperCase()
    let ownerName = req.body.ownerName
    let accountType = req.body.accountType.toLowerCase()

    let isExist = accountInfo.find(item => item.accountNumber == accountNumber)


    if (currencyCode != "TRY" && currencyCode != "USD" && currencyCode != "EUR") {
        res.status(400).json({
            message: "Undefined currency code"
        })

    } else if (accountType != "individual" && accountType != "corporate") {
        res.status(400).json({
            message: "Undefined account type"
        })

    } else if (accountNumber.constructor != Number) {
        res.status(400).json({
            message: "Account number must be a numeric value"
        })

    } else if (accountNumber != parseInt(accountNumber)) {
        res.status(400).json({
            message: "Account number must be integer"
        })

    } else if (isExist) {
        res.status(400).json({
            message: "Already have an account"
        })


    } else {
        accountData.pushAccount({
            accountNumber: accountNumber,
            currencyCode: currencyCode,
            ownerName: ownerName,
            accountType: accountType,
            balance
        })

        res.status(200).json({
            message: "Succesfuly"
        })
    }

});

// Get Account Info

router.get('/:accountNumber', (req, res, next) => {

    let accountNumber = req.params.accountNumber
    let accountDetail = accountInfo.find(item => item.accountNumber == accountNumber)


    if (accountDetail) {
        res.status(200).json({
            accountDetail,

        })
    } else {
        res.status(404).json({
            message: "Not found"
        })
    }


});

module.exports = router;
