import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { BID_AMOUNT, CAMPAIGN_ACTIVE, CAMPAIGN_UN_ACTIVED } from '../../util/constant';
import { uploadImage } from '../../api/imgur_api';
import ReactLoading from 'react-loading';
import { create, update } from '../../api/campaign_api';
var jwt_decode = require('jwt-decode');

class FormCreateCampaign extends Component {
    constructor(props) {
        super(props);
        const { currentCampaign } = this.props;
        this.state = {
            name: currentCampaign ? currentCampaign.name : '',
            status: currentCampaign ? currentCampaign.status : CAMPAIGN_ACTIVE,
            startdate: currentCampaign ? currentCampaign.startdate : '',
            enddate: currentCampaign ? currentCampaign.enddate : '',
            budget: currentCampaign ? currentCampaign.budget : '',
            title: currentCampaign ? currentCampaign.title : '',
            description: currentCampaign ? currentCampaign.description : '',
            campaignimg: currentCampaign ? currentCampaign.campaignimg : '',
            final_url: currentCampaign ? currentCampaign.final_url : '',

            isLoading: false,
            campPage: this.props.location.state ? this.props.location.state.page : null
        }
    }
    
    checkToDateGreaterThanStartDay(date){
        const today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear().toString();
        // current date greater startdate then return false, otherwise
        return !(yyyy > date[0] || mm > date[1] || dd > date[2])
        
    }
    checkEndDateGreaterThanStartDay(end, start){
        return( end[0] > start[0] || end[1] > start[1] || end[2] > start[2]);
    }


    handleChangeName = event => {
        this.setState({ name: event.target.value });
    }

    handleChangeStatus = event => {
        this.setState({ status: event.target.value });
    }

    handleChangeStartDay = event => {
        const dateArr = event.target.value.split(/-/);
        if(!this.checkToDateGreaterThanStartDay(dateArr)){
            alert("Start date must greater or equal than current day");
            return;
        }
        this.setState({ startdate: event.target.value });
    }

    handleChangeEndDay = event => {     
        const end = event.target.value.split(/-/);
        const start = this.state.startdate.split(/-/);
        if(!this.checkEndDateGreaterThanStartDay(end, start)){
            alert("End date must greater or equal than start day");
            return;
        }
        this.setState({ enddate: event.target.value });
    }

    handleChangeBudget = event => {
        this.setState({ budget: event.target.value });
    }

    handleChangeTitle = event => {
        this.setState({ title: event.target.value });
    }

    handleChangeDesc = event => {
        this.setState({ description: event.target.value });
    }

    handleChangeUrlFor = event => {
        this.setState({ final_url: event.target.value });
    }

    uploadImage = event => {
        this.setState({ isLoading: true });
        const imgFile = event.target.files[0];
        uploadImage(imgFile).then(response => {
            const imageUrl = `https://i.imgur.com/${response.data.data.id}.png`;
            this.setState({ campaignimg: imageUrl, isLoading: false })
        }).catch(err => {
            console.log(err)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const campaign = {};
        const user_id = jwt_decode(localStorage.getItem("token")).user_id;
        const attributes = Object.keys(this.state);
        for (let index in attributes) {
            const key = attributes[index];
            const value = this.state[`${attributes[index]}`];
            if (value === "") {
                alert("You must type full information");
                return;
            }

            if(key === "isLoading" || key === "campPage"){
                continue;
            }

            campaign[`${key}`] = String(value);
        }
        campaign["bid"] = String(BID_AMOUNT);
        campaign['user_id'] = String(user_id);
        //send request
        if (this.props.currentCampaign) {
            if(!this.checkObjectEqual(campaign, this.props.currentCampaign)){
                update(campaign, this.props.currentCampaign.id).then(res => {
                    alert(res.data.message);
                    this.backToPreviousPage();
                }).catch(err => {
                    console.log(err);
                })
            }
            else{
                alert("You must update campaign")
            }
           
        }
        else {
            try {
                create(campaign).then(res => {
                    alert(res.data.message);
                    this.props.history.push("/manage/campaign");
                }).then(err => {
                    
                })
            }
            catch (err) {
                alert(err);
            }
        }

    }

    backToPreviousPage = ()=> {
        this.props.history.push({
            pathname: "/manage/campaign",
            state: { page: this.state.campPage}
        });
    }

    checkObjectEqual(a, b) {
        const aProps = Object.getOwnPropertyNames(a);
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            // If values of same property are not equal,
            // objects are not equivalent
            if (String(a[propName]) !== String(b[propName]) ) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
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
                                                        value={this.state.name}
                                                        onChange={this.handleChangeName} />
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
                                                            disabled={this.state.status}
                                                            className="form-control"
                                                            value={this.state.startdate}
                                                            onChange={this.handleChangeStartDay}
                                                        />
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
                                                            value={this.state.enddate}
                                                            onChange={this.handleChangeEndDay}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ===================================================Budget============================================ */}
                                <div className="card">
                                    <div className="card-header custom-card-header" data-toggle="collapse" data-target="#collapseBudget" aria-expanded="false" aria-controls="collapseBudget">
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
                                                            value={this.state.budget}
                                                            className="form-control"
                                                            onChange={this.handleChangeBudget}
                                                        />
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
                                                            className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ===================================================Creative============================================ */}
                                <div className="card">
                                    <div className="card-header custom-card-header" data-toggle="collapse" data-target="#collapseCreative" aria-expanded="false" aria-controls="collapseCreative">
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
                                                        value={this.state.title}
                                                        className="form-control"
                                                        onChange={this.handleChangeTitle}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row custom-form-row">
                                                <label className="col-4 col-form-label">Description :</label>
                                                <div className="col-8">
                                                    <textarea name="description"
                                                        placeholder="description"
                                                        className="form-control"
                                                        rows="4"
                                                        value={this.state.description}
                                                        onChange={this.handleChangeDesc} />
                                                </div>
                                            </div>
                                            <div className="form-group row custom-form-row">
                                                <label className="col-4 col-form-label">Create preview :</label>
                                                <div className="col-8 custom-style">
                                                    <input type="file" accept="images/*" onChange={this.uploadImage} />
                                                </div>
                                                {
                                                    this.state.campaignimg && (
                                                        <div className="offset-4 col-8 img-preview">
                                                            <img src={this.state.campaignimg} alt="none" />
                                                        </div>
                                                    )
                                                }
                                                {
                                                    this.state.isLoading && <ReactLoading color={"black"} height={"1%"} width={"5%"} />
                                                }
                                            </div>
                                            <div className="form-group row custom-form-row">
                                                <label className="col-4 col-form-label">Final URL :</label>
                                                <div className="col-8">
                                                    <input type="text"
                                                        name="finalURL"
                                                        placeholder="Final URL"
                                                        className="form-control"
                                                        value={this.state.final_url}
                                                        onChange={this.handleChangeUrlFor}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*-----------------------------------Button--------------------------------*/}
                                <div className="form-group form-contain-button">
                                    <button className="btn btn-link" onClick={this.backToPreviousPage}>Back to list</button>
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
