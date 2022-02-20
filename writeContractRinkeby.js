let ethers = require('ethers');

let network = 'https://rinkeby.infura.io/v3/39f4588fa9b14c9ab5888675d3d58d43';

let provider = ethers.getDefaultProvider(network);

const contractAddress = '0xC36BCc08964307D55baA2FcF33cF596861D497B4'

const abi = [
    'function getAge() external view returns(uint)',
    'function setAge(uint _age) external'
]

const pvtKey = "ac416838cabab81a0032ee5351aa600ec2c39e33a9aa17b496b8b0642cfed05f";

const wallet = new ethers.Wallet(pvtKey, provider)
var contract = new ethers.Contract(contractAddress, abi, wallet)



async function write() {
    let sendPromise = await contract.setAge(3);
    console.log("new age =", sendPromise)
}
write();
