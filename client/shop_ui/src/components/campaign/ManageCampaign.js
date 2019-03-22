import React, { Component } from 'react';
import CampaignTable from './CampaignTable';
import MenuBar from '../commons/header/MenuBar';

class ManageCampaign extends Component {

    render() {
        return (
            <div>
                <MenuBar />
                <div className="page">
                    <CampaignTable />
                </div>
            </div>
        );
    }
}

export default ManageCampaign;