import React, {Component} from 'react'
import factory from '../ethereum/factory';
import {Card, Button} from 'semantic-ui-react';
import Layout from '../components/Layout';

class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    renderCampaigns() {
        console.log(this.props.campaigns);
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });
        console.log("items: " + items);
        return <Card.Group items={items}/>;
    }

    render() {
        return (
            <Layout>
                <div>
                    <link rel="stylesheet"
                          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
                    <h3>Open Campaigns</h3>
                    <Button
                        floated="right"
                        content="Create Campaign"
                        icon="add circle"
                        primary={true}
                    />
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;