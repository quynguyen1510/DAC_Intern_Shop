import React, { Component } from 'react';
import CampaignTable from './CampaignTable';
import Header from '../commons/header/Header';

class ManageCampaign extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="page">
                    <CampaignTable />
                </div>
            </div>
        );
    }
}

export default ManageCampaign;