const express = require('express');
const { accounts } = require('./account');
const router = express.Router();

// Withdraw  
router.post('/', (req, res, next) => {

    let accountNumber = req.body.accountNumber
    let amount = req.body.amount



});


module.exports = router;