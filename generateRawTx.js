const main = async () => {
    const { newKit } = require('@celo/contractkit');
    const kit = newKit('https://alfajores-forno.celo-testnet.org');

    const account = '0xDa52c9ffEBd4D54C94a072776126069d43E74F9e';
    const recipient = '0xDa52c9ffEBd4D54C94a072776126069d43E74F9e';
    const amountToSend = kit.web3.utils.toWei('0', 'ether');

    const cUSDAddress = "0x765DE816845861e75A25fCA122bb6898B8B1282a"
    console.log('cUSDAddress: ', cUSDAddress)

    const privateKey = '1aa1822ee73290cbbce7033341c1c7115ca55a2273a6e9352bc42c2e4df9a9b6';
    kit.addAccount(privateKey);

    const nonce = await kit.web3.eth.getTransactionCount(account);

    const txObject = {
        from: account,
        to: recipient,
        value: amountToSend,
        gasPrice: "0",
        nonce: nonce,
        feeCurrency: cUSDAddress,
    };
    const gasEstimate = await kit.web3.eth.estimateGas(txObject);
    txObject.gas = gasEstimate;
    const signedTx = await kit.web3.eth.signTransaction(txObject);
    console.log('signedTx: ', signedTx)
    console.log('signedTx raw: ', signedTx.raw);

    kit.web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    .on('transactionHash', hash => console.log(`Transaction hash: ${hash}`))
    .on('receipt', receipt => console.log(`Transaction receipt: `, receipt))
    .on('error', console.error);

}

main().catch(err => console.error(err));