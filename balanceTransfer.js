const ethers = require('ethers');

let network = 'http://127.0.0.1:8545/';

let provider = ethers.getDefaultProvider(network);

//senderAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
senderPrivateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'

let wallet = new ethers.Wallet(senderPrivateKey, provider);

receiverAddress = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8';

let amount = '1000'

let tx =  {
    to: receiverAddress,
    value: ethers.utils.parseEther(amount)
}

async function abc () {
    const def = await wallet.sendTransaction(tx); 
    console.log('txHash', def.hash)

    const balance =  await provider.getBalance('0x70997970c51812dc3a010c7d01b50e0d17dc79c8')
    console.log(balance.toString())
}
abc();
