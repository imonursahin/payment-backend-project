# payment-backend-project

Technology: Node JS
Tool: Postman

# How to run the project?
1) Node server must be installed on your computer (https://nodejs.org/en/download/)
2) To install packages included in the project ->  npm install
3) To Run the Project -> npm start

# Project Detail

In this challenge, you are asked to create a payment rest api that allows users to create an
account (both individual or corporate), deposit/withdraw money and make a payment.
Only individual accounts can deposit or withdraw money. Payments can only be wired from an
individual account to a corporate account.
Each money transaction should create an accounting with transaction amount, transaction type
and account information. These transactions should be able to be listed as accounting history.
All accounts and accounting transactions should be held in memory, so no database
implementation is required.
Each route should have its own input and business validation. 

# Sample Route Data

## 1. Account Create Route
```
POST http://localhost:5050/account
```
```

{
    "accountNumber": 1,
    "currencyCode": "TRY",
    "ownerName": "Onur Şahin",
    "accountType": "individual"
}
```
```
{
    "accountNumber": 2,
    "currencyCode": "TRY",
    "ownerName": "Şahin Onur",
    "accountType": "corporate"

}
```

## 2. Account Info Route
```
GET http://localhost:5050/account/1
```

## 3. Payment Route
```
POST http://localhost:5050/payment
```
```
{
    "senderAccount": 1,
    "receiverAccount": 2,
    "amount": 50
}
```

## 4. Deposit Route
```
POST http://localhost:5050/deposit/
```
```
{
    "accountNumber": 1,
    "amount": 565
}
```

## 5. Withdraw Route
```
POST http://localhost:5050/withdraw
```
```
{
    "accountNumber": 1,
    "amount": 50.68
}
```

## 6. Transaction History
```
GET http://localhost:5050/accounting/2
```
