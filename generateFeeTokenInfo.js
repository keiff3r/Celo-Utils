const { RLPEncodedTx, Signer } = require('@celo/connect')
const { tokenInfoByAddressAndChainId } = require('@celo/wallet-ledger/lib/tokens')

const feeCurrency = '0x765de816845861e75a25fca122bb6898b8b1282a'
const TEST_NET = 44787
const MAIN_NET = 42220
const chainId = MAIN_NET

const feeTokenInfo = tokenInfoByAddressAndChainId(
    feeCurrency,
    chainId
  )
    data = (feeTokenInfo.data)
    // chango to str
    data = data.toString('hex')
    console.log(feeTokenInfo)
    console.log('data: ', data)
    console.log('data length:', data.length)