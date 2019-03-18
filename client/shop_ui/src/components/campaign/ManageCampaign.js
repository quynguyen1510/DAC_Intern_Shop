import React, { Component } from 'react';
import CampaignTable from './CampaignTable';
import Navbar from '../commons/header/Navbar';
import { Link } from 'react-router-dom';


class ManageCampaign extends Component {

    render() {
        return (
            <div className="manage-product">
                <Navbar />
                <div className="page">
                    <div>
                        <Link to="/campaign/new" className="btn btn-default" id="btnCreateUser">Create Campaign</Link>
                    </div>
                    <CampaignTable />
                </div>
            </div>
        );
    }
}

export default ManageCampaign;