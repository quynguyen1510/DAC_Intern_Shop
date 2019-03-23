import React, { Component } from 'react';
import CampaignForm from './CampaignForm';
import Header from '../commons/header/Header';

class CreateCampaign extends Component {
    render() {
        return (
            <div className="detail">
              <Header /> 
            <h2 className="text-center"> Create New Campaign</h2>
            <div className="inputForm">
                <CampaignForm />
            </div>
        </div>
        );
    }
}

export default CreateCampaign;