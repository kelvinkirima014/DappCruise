let contractABI = []
let contractAddress =  0x76e4deF120bB0B6a5858572d36C0461c83b448B6 // contract address from truffle CLI
let web3 = new Web3('http://127.0.0.1:9545/')//use Web3 to communicate with blockchain/smartcontract
let simpleSmartContract = new web3.eth.Contract(contractABI,
    contractAddress)// points to contract deployed on blockchain
console.log(simpleSmartContract)
web3.eth.getAccount()
.then(console.log)

