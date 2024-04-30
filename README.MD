# Celo Utils

This project provides utility scripts for interacting with the Celo blockchain using the Celo ContractKit. It includes scripts to generate raw transactions and fetch fee token information.

## Files

- [`generateRawTx.js`](generateRawTx.js): This script creates a raw transaction using the Celo ContractKit. It sets up a new kit instance, adds an account with a private key, and creates a transaction object with details such as the sender, recipient, amount, gas price, nonce, and fee currency. It then estimates the gas for the transaction, signs it, and logs the signed transaction.

- [`generateFeeTokenInfo.js`](generateFeeTokenInfo.js): This script fetches information about a fee token using the Celo ContractKit and the [`@celo/wallet-ledger`](package.json) library. It retrieves the token information by the token's address and the chain ID, converts the data to a hexadecimal string, and logs the token information, the hexadecimal data, and the length of the data.

## Usage

To run the scripts, use Node.js:

```sh
node generateRawTx.js
node generateFeeTokenInfo.js
```

Please note that the scripts contain hardcoded values for the account, recipient, private key, and fee currency. You should replace these with your own values before running the scripts.
