import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {BID_AMOUNT, CAMPAIGN_ACTIVE, CAMPAIGN_UN_ACTIVED} from '../../util/constant';
import { uploadImage } from '../../api/imgur_api';
class FormCreateCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: CAMPAIGN_ACTIVE,
            startdate: '',
            enddate: '',
            budget: '',
            title: '',
            description: '',
            campaignimg : '',
            final_url: ''
        }
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value});
    }

    handleChangeStatus = event => {
        this.setState({ status: event.target.value});
    }

    handleChangeStartDay = event => {
        this.setState({ startdate: event.target.value});
    }

    handleChangeEndDay = event => {
        this.setState({ enddate: event.target.value});
    }

    handleChangeBudget = event => {
        this.setState({ budget: event.target.value});
    }

    handleChangeTitle = event => {
        this.setState({ title: event.target.value});
    }

    handleChangeDesc = event => {
        this.setState({ description: event.target.value});
    }

    handleChangeUrlFor = event => {
        this.setState({ final_url: event.target.value});
    }
    
    uploadImage = event  =>{
        const imgFile = event.target.files[0];
        uploadImage(imgFile).then(response => {
            const imageUrl = `https://i.imgur.com/${response.data.data.id}.png`;
            this.setState({campaignimg: imageUrl})
        }).catch(err => {
            console.log(err)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newCampaign = {};
        const attributes = Object.keys(this.state);
        for(let index in attributes){
            const key = attributes[index];
            const value = this.state[`${attributes[index]}`];
            console.log(value)
           if(value){
               newCampaign[key] = value;
           }
        }
        newCampaign.bid = BID_AMOUNT
        console.log(newCampaign)
    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="campaign-container">
                        <div className="col-md-12">
                            <h4>Create Campaign</h4>
                            <hr />
                            <div className="campaign-content">
                                <form onSubmit={this.handleSubmit} >
                                    {/* ============================================Detail======================================= */}
                                    <div className="card">
                                        <div className="card-header custom-card-header" data-toggle="collapse" data-target="#collapseDetail" aria-expanded="false" aria-controls="collapseDetail">
                                            <h5>Detail</h5>
                                            <div className="pull-right">
                                                <button type="button">
                                                    <i className="fa fa-angle-down" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseDetail">
                                            <div className="card-body">
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Name :</label>
                                                    <div className="col-8 custom-style">
                                                        <input type="text" 
                                                                name="name" placeholder="Name" 
                                                                className="form-control" 
                                                                defaultValue=""
                                                                required
                                                                onChange={this.handleChangeName}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Campain Status: </label>
                                                    <div className="col-8 custom-style">
                                                        <select name="status" 
                                                                className="form-control"
                                                                onChange={this.handleChangeStatus}
                                                                value={this.state.status}>
                                                            <option value={CAMPAIGN_ACTIVE}>ACTIVE</option>
                                                            <option value={CAMPAIGN_UN_ACTIVED}>UNACTIVED</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ===========================================Schedule======================================== */}
                                    <div className="card">
                                        <div className="card-header custom-card-header" data-toggle="collapse" data-target="#collapseSchedule" aria-expanded="false" aria-controls="collapseSchedule">
                                            <h5>Schedule</h5>
                                            <div className="pull-right">
                                                <button type="button">
                                                    <i className="fa fa-angle-down" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseSchedule">
                                            <div className="card-body">
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Start date: </label>
                                                    <div className="col-8 custom-style">
                                                        <div className="input-left">
                                                            <input type="date" 
                                                            name="startDay" 
                                                            className="form-control"  
                                                            onChange={this.handleChangeStartDay}
                                                            required />
                                                        </div>                                                   
                                                    </div>
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">End date: </label>
                                                    <div className="col-8 custom-style">
                                                        <div className="input-left">
                                                            <input type="date" 
                                                            name="endDay" 
                                                            className="form-control" 
                                                            onChange={this.handleChangeEndDay}
                                                            required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ===================================================Budget============================================ */}
                                    <div className="card">
                                        <div className="card-header custom-card-header"  data-toggle="collapse" data-target="#collapseBudget" aria-expanded="false" aria-controls="collapseBudget">
                                            <h5>Budget</h5>
                                            <div className="pull-right">
                                                <button type="button">
                                                    <i className="fa fa-angle-down" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseBudget">
                                            <div className="card-body">
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Budget :</label>
                                                    <div className="col-8 custom-style">
                                                        <div className="input-group input-campaign">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-dollar-sign" />
                                                                </span>
                                                            </div>
                                                            <input type="number" 
                                                            name="budget" 
                                                            placeholder="Budget" 
                                                            min={1} 
                                                            className="form-control" 
                                                            onChange={this.handleChangeBudget}
                                                            required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ==============================================Bidding================================================ */}
                                    <div className="card">
                                        <div className="card-header custom-card-header" data-toggle="collapse" data-target="#collapseBidding" aria-expanded="false" aria-controls="collapseBidding">
                                            <h5>Bidding</h5>
                                            <div className="pull-right">
                                                <button type="button">
                                                    <i className="fa fa-angle-down" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseBidding">
                                            <div className="card-body">
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Bid Amount :</label>
                                                    <div className="col-8 custom-style">
                                                        <div className="input-group input-campaign">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-dollar-sign" />
                                                                </span>
                                                            </div>
                                                            <input type="number" 
                                                            name="bid" 
                                                            placeholder="Bidding Amount" 
                                                            min={1} 
                                                            value={10}
                                                            readOnly
                                                            className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ===================================================Creative============================================ */}
                                    <div className="card">
                                        <div className="card-header custom-card-header"  data-toggle="collapse" data-target="#collapseCreative" aria-expanded="false" aria-controls="collapseCreative">
                                            <h5>Creative</h5>
                                            <div className="pull-right">
                                                <button type="button">
                                                    <i className="fa fa-angle-down" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseCreative">
                                            <div className="card-body">
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Title :</label>
                                                    <div className="col-8">
                                                        <input type="text" 
                                                        name="title" 
                                                        placeholder="Title" 
                                                        className="form-control" 
                                                        onChange={this.handleChangeTitle}
                                                        required />
                                                    </div>
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Description :</label>
                                                    <div className="col-8">
                                                        <textarea name="description" 
                                                        placeholder="description" 
                                                        className="form-control" 
                                                        rows="4" 
                                                        defaultValue={""}
                                                        onChange={this.handleChangeDesc} />
                                                    </div>
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Create preview :</label>
                                                    <div className="col-8 custom-style">
                                                        <input type="file" accept="images/*"  onChange={this.uploadImage} required/>
                                                    </div>
                                                    {
                                                        this.state.campaignImageUrl && (
                                                            <div className="offset-4 col-8 img-preview">
                                                                <img src={this.state.campaignImageUrl} alt="none" />
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Final URL :</label>
                                                    <div className="col-8">
                                                        <input type="text" 
                                                        name="finalURL" 
                                                        placeholder="Final URL" 
                                                        className="form-control" 
                                                        onChange={this.handleChangeUrlFor}
                                                        required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*-----------------------------------Button--------------------------------*/}
                                    <div className="form-group form-contain-button">
                                        <button className="btn btn-link">Back to list</button>
                                        <button type="submit" className="btn btn-info">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(FormCreateCampaign);
