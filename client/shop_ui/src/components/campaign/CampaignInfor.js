import React, { Component } from 'react';
import Navbar from '../commons/header/Navbar';
import CampaignForm from './CampaignForm';

class CampaignInfor extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentCampaign: this.props.location.state.camp
        }
    }

    render(){
        const {currentCampaign} = this.state;
        return(
            <div>
                <Navbar />
                <div className="profile">
                    <h2>Campaign Name: {currentCampaign ? currentCampaign.name: ""}</h2>
                    <div className="inputForm">
                        <CampaignForm currentCampaign={currentCampaign}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CampaignInfor;