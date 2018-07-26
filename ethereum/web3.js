import  Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3!=='undefined') {
    // we are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
    console.log("using metamask");
}
else {
    // we are in server OR user without metamask.
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/D8nLD5KUdNsOxz12XSBX"
    );
    web3 = new Web3(provider);
    console.log("using infura");
}

export default web3;