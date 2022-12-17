//to connect truffle and web3 with the functions

//connection with web3
var Web3 = require('web3');
//connection with local host(truffle env)
const providers = new Web3.providers.HttpProvider('http://127.0.0.1:8545/')
var web3 = new Web3(providers);

const Calculator = require('../build/contracts/Calculator.json');

async function createContractInstance(){
    var accounts=await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const{address} = Calculator.networks[networkId];

var instance = await new web3.eth.Contract(
    Calculator.abi,
    address //sddress of contract
)
//check
console.log("Instance",instance.meathod);
//return{instance, address}
}

//createContractInstance();
module.exports = {createContractInstance}//ecpot it to functions


// //check

// async function connection(){
//     accounts=await web3.eth.getAccounts();

//     console.log("accounts", accounts)
// }

// connection();