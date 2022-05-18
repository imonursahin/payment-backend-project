const express = require('express')
const app = express()
const bodyParser = require("body-parser");


app.use(bodyParser.json());


// Account Routes
const createAccount = require('./server/routes/account');
app.use('/account', createAccount)

// Payment Routes
const payment = require('./server/routes/payment');
app.use('/payment', payment)

// Deposit Routes
const deposit = require('./server/routes/deposit');
app.use('/deposit', deposit)

// Withdraw Routes
const withdraw = require('./server/routes/withdraw');
app.use('/withdraw', withdraw)


module.exports = app;

