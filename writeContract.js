let ethers = require('ethers');

let network = 'http://127.0.0.1:8545/';



let provider = ethers.getDefaultProvider(network);

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const abi = require('./contractAbi');


const address = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
const pvtKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const wallet = new ethers.Wallet(pvtKey, provider)

var contract = new ethers.Contract(contractAddress, abi, wallet)

var sendPromise = contract.setGreeting(12);

sendPromise.then(function(transaction){
    console.log(transaction);
  });

/* 
async function write() {
let signer = provider.getSigner()
//console.log("signer=", signer)

let contract = new ethers.Contract(contractAddress, abi, provider)

await signer.sendTransaction({
    //gasPrice: gasPrice,
    gasLimit: ethers.utils.hexlify(100000),
    //nonce: 3,
    to: contractAddress,
    //data: contract.setGreeting(30)
    //chainId: 2
})


    const getRead = await contract.setGreeting(30);
    const result = getRead.wait()
    console.log("write =", result);
}
write(); */