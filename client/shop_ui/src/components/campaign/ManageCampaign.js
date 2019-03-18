import React, { Component } from 'react';
import CampaignTable from './CampaignTable';
import Navbar from '../commons/header/Navbar';

class ManageCampaign extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="page">
                    <CampaignTable />
                </div>
            </div>
        );
    }
}

export default ManageCampaign;