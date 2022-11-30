//Package & Controller declaration
const Web3 = require('web3');
const providerUrl = "https://mainnet.infura.io/v3/26d4ca9472a6410ca3bd7e804c39ffe7"
//Set provider
web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function : Create ETH wallet
// Route : POST /api/wallet/create
////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.create = function (req, res) {

    try {
        let account = web3.eth.accounts.create(web3.utils.randomHex(32));

        res.status(200).json({
            success: true,
            data: account
        });

    } catch (e) {
        res.status(400).json({
            error: true,
            description: e
        });
    }
}


// 0xacad6011c5da03ee43cf99d34d0c8a0c56acf88ba7a52d5e7d068305a2512593