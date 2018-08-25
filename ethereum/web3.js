import Web3 from 'web3';
const HDWalletProvider = require("truffle-hdwallet-provider");


let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new HDWalletProvider(
        "buyer wisdom daughter swift release glow caught twice melody pole profit anchor",
        "https://rinkeby.infura.io/v3/363ea9633bcb40bc8a857d908ee27094"
    );
    web3 = new Web3(provider);
}

export default web3;