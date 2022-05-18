const express = require('express');
const { accounts } = require('./account');
const router = express.Router();

// Payment
router.post('/', (req, res, next) => {

    let senderAccount = req.body.senderAccount
    let receiverAccount = req.body.receiverAccount
    let amount = req.body.ownerName


});


module.exports = router;


/* Sadece bireysel hesaplar para yatırabilir veya çekebilir. 
Ödemeler yalnızca bir bireysel hesaptan kurumsal hesaba. */