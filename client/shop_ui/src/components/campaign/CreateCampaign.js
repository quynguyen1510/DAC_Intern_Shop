import React, { Component } from 'react';
import CampaignForm from './CampaignForm';
import Navbar from '../commons/header/Navbar';

class CreateCampaign extends Component {
    render() {
        return (
            <div className="detail">
              <Navbar /> 
            <h2 className="text-center"> Create New Campaign</h2>
            <div className="inputForm">
                <CampaignForm />
            </div>
        </div>
        );
    }
}

export default CreateCampaign;