const express = require('express');
const router = express.Router();
const TransactionData = require('../data/transaction_data');

let transactionHistory = new TransactionData().getInstance()
let transactionInfo = transactionHistory.getTransaction()

// Get Transaction History

router.get('/:accountNumber', (req, res, next) => {

    let accountNumber = req.params.accountNumber
    let transactionDetail = transactionInfo.filter(item => item.accountNumber == accountNumber);


    if (transactionDetail) {
        res.status(200).json({
            transactionDetail
        })

    } else {
        res.status(400).json({
            message: "Not found"
        })
    }


});

module.exports = router;
