const { RLPEncodedTx, Signer } = require('@celo/connect')
const { tokenInfoByAddressAndChainId } = require('@celo/wallet-ledger/lib/tokens')

const feeCurrency = '0x765de816845861e75a25fca122bb6898b8b1282a'
const chainId = 42220

const feeTokenInfo = tokenInfoByAddressAndChainId(
    feeCurrency,
    chainId
  )
    console.log(feeTokenInfo.data)