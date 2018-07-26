import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0xb2B798F51C00EcB03631b166355F0EEEd5d9Edfd'
);

export default instance;
