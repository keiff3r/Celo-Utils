# ConnectKit Demo

This project is a demonstration of how to use the Celo ContractKit to interact with the Celo blockchain. It includes scripts to generate raw transactions and fetch fee token information.

## Files

- [`generateRawTx.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkeiffer%2FCode%2FCelo%2Fconnectkit_demo%2FgenerateRawTx.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/keiffer/Code/Celo/connectkit_demo/generateRawTx.js"): This script creates a raw transaction using the Celo ContractKit. It sets up a new kit instance, adds an account with a private key, and creates a transaction object with details such as the sender, recipient, amount, gas price, nonce, and fee currency. It then estimates the gas for the transaction, signs it, and logs the signed transaction.

- [`generateFeeTokenInfo.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkeiffer%2FCode%2FCelo%2Fconnectkit_demo%2FgenerateFeeTokenInfo.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/keiffer/Code/Celo/connectkit_demo/generateFeeTokenInfo.js"): This script fetches information about a fee token using the Celo ContractKit and the [`@celo/wallet-ledger`](command:_github.copilot.openSymbolInFile?%5B%22package.json%22%2C%22%40celo%2Fwallet-ledger%22%5D "package.json") library. It retrieves the token information by the token's address and the chain ID, converts the data to a hexadecimal string, and logs the token information, the hexadecimal data, and the length of the data.

- [`package.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkeiffer%2FCode%2FCelo%2Fconnectkit_demo%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/keiffer/Code/Celo/connectkit_demo/package.json"): This file lists the project's npm metadata and its dependencies, which include [`@celo/base`](command:_github.copilot.openSymbolInFile?%5B%22package.json%22%2C%22%40celo%2Fbase%22%5D "package.json"), [`@celo/connect`](command:_github.copilot.openSymbolInFile?%5B%22package.json%22%2C%22%40celo%2Fconnect%22%5D "package.json"), [`@celo/contractkit`](command:_github.copilot.openSymbolInFile?%5B%22package.json%22%2C%22%40celo%2Fcontractkit%22%5D "package.json"), and [`@celo/wallet-ledger`](command:_github.copilot.openSymbolInFile?%5B%22package.json%22%2C%22%40celo%2Fwallet-ledger%22%5D "package.json").

- [`.gitignore`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkeiffer%2FCode%2FCelo%2Fconnectkit_demo%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/keiffer/Code/Celo/connectkit_demo/.gitignore"): This file specifies intentionally untracked files that Git should ignore.

## Usage

To run the scripts, use Node.js:

```sh
node generateRawTx.js
node generateFeeTokenInfo.js
```

Please note that the scripts contain hardcoded values for the account, recipient, private key, and fee currency. You should replace these with your own values before running the scripts.
