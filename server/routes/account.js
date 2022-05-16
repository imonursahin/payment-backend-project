const express = require('express');
const router = express.Router();


let accounts = [];


// Create Account

router.post('/', (req, res, next) => {


    let accountNumber = req.body.accountNumber
    let currencyCode = req.body.currencyCode.toUpperCase()
    let ownerName = req.body.ownerName
    let accountType = req.body.accountType.toLowerCase()

    let isExist = accounts.find(item => item.accountNumber == accountNumber)


    if (currencyCode != "TRY" && currencyCode != "USD" && currencyCode != "EUR") {
        res.send("Undefined currency code")

    } else if (accountType != "individual" && accountType != "corporate") {
        res.send("Undefined account type")

    } else if (accountNumber.constructor != Number) {
        res.send("Account number must be a numeric value")

    } else if (isExist) {
        res.send("Already have an account")


    } else {
        accounts.push({
            accountNumber: accountNumber,
            currencyCode: currencyCode,
            ownerName: ownerName,
            accountType: accountType
        })
        res.status(200).json({
            message: "Succesfuly"
        })
    }

});

// Get Account Info

router.get('/:accountNumber', (req, res, next) => {

    let accountNumber = req.params.accountNumber

    let isExist = accounts.find(item => item.accountNumber == accountNumber)

    let accountInfo = isExist


    if (isExist) {
        res.status(200).json({
            accountInfo
        })
    } else {
        res.status(404).json({
            message: "Not found"
        })
    }


});

module.exports = router;