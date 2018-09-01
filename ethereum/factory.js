import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0x70cCC32fe0303B7178CD03003A11fE97Ab8753F7'
);

export default instance;
