import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0xff97F94164Ae2f9Af4958109397429592064b411'
);

export default instance;
