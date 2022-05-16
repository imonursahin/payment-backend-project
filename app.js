const express = require('express')
const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.json());


// Account Routes
const createAccount = require('./server/routes/account');
app.use('/account', createAccount)




module.exports = app;



