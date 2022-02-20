const ethers = require('ethers');

const network = 'http://127.0.0.1:8545/'
const provider = ethers.getDefaultProvider(network);

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const abi = [
    'function getAge() external view returns(uint)',
    'function setAge(uint _age) external'
]

//const caller = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
const pvtKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
const wallet = new ethers.Wallet(pvtKey, provider);

const contract = new ethers.Contract(contractAddress, abi,wallet );



async function write() {

    const read = await contract.getAge();
    console.log("age=", read.toString());

    const send = await contract.setAge(30);
    //console.log("writing =", send);

    const read2 = await contract.getAge();
    console.log("age=", read2.toString());
}
write()

/* async function abc(){ 
const read = await contract.getAge();
console.log("age=", read.toString());
}
abc()
 */ 