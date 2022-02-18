const ethers = require('ethers');

let network = 'http://127.0.0.1:8545/';

let provider = ethers.getDefaultProvider(network);

const contractAddress =  '0x610178da211fef7d417bc0e6fed39f05609ad788'
const abi = require('./contractAbi');
//console.log(abi);

let contract = new ethers.Contract(contractAddress, abi, provider)

async function read() {
    const getRead =await contract.greet();
    console.log("read =", getRead);
}
read();
