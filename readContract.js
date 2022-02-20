const ethers = require('ethers');

let network = 'http://127.0.0.1:8545/';

let provider = ethers.getDefaultProvider(network);

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const abi = require('./contractAbi');
//console.log(abi);


/* giving error fs not working
var fs = require('fs')
var jsonFile = require("./artifacts/contracts/Greeter.sol/Greeter.json")
var parsed = JSON.parse(fs.readFileSync(jsonFile));
var abi = parsed.abi;
console.log("abi =",abi)
 */ 




let contract = new ethers.Contract(contractAddress, abi, provider)

async function read() {
    const getRead = await contract.greet();
    console.log("read =", getRead);
}
read();
