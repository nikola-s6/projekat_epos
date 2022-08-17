import Web3 from 'web3'

const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/10257ef4b67a40d9ae3dfa503ca6453a"
)

const web3 = new Web3(provider)

const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "components": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "lastName", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "shippingAddres", "type": "string" }, { "internalType": "address", "name": "buyer", "type": "address" }], "indexed": false, "internalType": "struct Projekat.Data", "name": "data", "type": "tuple" }], "name": "Ordered", "type": "event" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getReserve", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_lastName", "type": "string" }, { "internalType": "string", "name": "_email", "type": "string" }, { "internalType": "string", "name": "_shippingAddres", "type": "string" }], "name": "order", "outputs": [], "stateMutability": "payable", "type": "function" }]

const orderContract = new web3.eth.Contract(abi, "0x542bF78Bcc32AD5392Cc1b493BB6F7a0c2c644fc")

export default orderContract