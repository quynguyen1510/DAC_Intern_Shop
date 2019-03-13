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
                    <div>
                        <span className="btn btn-info">Page: 1</span>
                    </div>
                    <CampaignTable />
                    <nav aria-label="...">
                        <ul className="pagination pagination-lg">
                            <li className="page-item"><button className="page-link" href="#none" >Previous</button></li>
                            <li className="page-item"><button className="page-link" href="#none" >Next</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default ManageCampaign;