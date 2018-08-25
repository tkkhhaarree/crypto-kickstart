const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require('Web3');
const compileFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    "buyer wisdom daughter swift release glow caught twice melody pole profit anchor",
    "https://rinkeby.infura.io/v3/363ea9633bcb40bc8a857d908ee27094"
);
const web3 = new Web3(provider);
console.log("provider info: " + provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("account used: " + accounts[0]);
    result = await new web3.eth.Contract(JSON.parse(compileFactory.interface))
        .deploy({data: "0x"+compileFactory.bytecode})
        .send({from: accounts[0]});
    console.log("deployed to address: " + result.options.address);
};
deploy();
export default accounts;