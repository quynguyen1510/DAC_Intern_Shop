import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class FormCreateCampaign extends Component {

    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="campaign-container">
                        <div className="col-md-12">
                            <h4>Create Campaign</h4>
                            <hr />
                            <div className="campaign-content">
                                <form>

                                    <div className="card">
                                        <div className="card-header custom-card-header">
                                            <h5>Detail</h5>
                                            <div className="pull-right">
                                                <button type="button" data-toggle="collapse" data-target="#collapseDetail" aria-expanded="false" aria-controls="collapseDetail">
                                                    <i className="fa fa-angle-down" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseDetail">
                                            <div className="card-body">
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Name :</label>
                                                    <div className="col-8 custom-style">
                                                        <input type="text" name="name" placeholder="Name" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">User Status :</label>
                                                    <div className="col-8 custom-style">
                                                        <select name="status" className="form-control">
                                                            <option value="ACTIVE">ACTIVE</option>
                                                            <option value="PAUSE">PAUSE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header custom-card-header">
                                            <h5>Schedule</h5>
                                            <div className="pull-right">
                                                <button type="button" data-toggle="collapse" data-target="#collapseSchedule" aria-expanded="false" aria-controls="collapseSchedule">
                                                    <i className="fa fa-angle-down" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseSchedule">
                                            <div className="card-body">
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Start date :</label>
                                                    <div className="col-8 custom-style">
                                                        <div className="input-left">
                                                            <input type="date" name="name" className="form-control" required />
                                                        </div>
                                                        <div className="input-right">
                                                            <input type="time" name="name" className="form-control" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">End date :</label>
                                                    <div className="col-8 custom-style">
                                                        <div className="input-left">
                                                            <input type="date" name="name" className="form-control" required />
                                                        </div>
                                                        <div className="input-right">
                                                            <input type="time" name="name" className="form-control" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header custom-card-header">
                                            <h5>Budget</h5>
                                            <div className="pull-right">
                                                <button type="button" data-toggle="collapse" data-target="#collapseBudget" aria-expanded="false" aria-controls="collapseBudget">
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
                                                            <input type="number" name="budget" placeholder="Budget" min={1} className="form-control" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header custom-card-header">
                                            <h5>Bidding</h5>
                                            <div className="pull-right">
                                                <button type="button" data-toggle="collapse" data-target="#collapseBidding" aria-expanded="false" aria-controls="collapseBidding">
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
                                                            <input type="number" name="bid" placeholder="Bidding Amount" min={1} className="form-control" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header custom-card-header">
                                            <h5>Creative</h5>
                                            <div className="pull-right">
                                                <button type="button" data-toggle="collapse" data-target="#collapseCreative" aria-expanded="false" aria-controls="collapseCreative">
                                                    <i className="fa fa-angle-down" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseCreative">
                                            <div className="card-body">
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Title :</label>
                                                    <div className="col-8">
                                                        <input type="text" name="title" placeholder="Title" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Description :</label>
                                                    <div className="col-8">
                                                        <textarea name="description" placeholder="Description" className="form-control" rows="4" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Create preview :</label>
                                                    <div className="col-8 custom-style">
                                                        <input type="file" accept="images/*" />
                                                    </div>
                                                    <div className="offset-4 col-8 img-preview">
                                                        <img src="https://cdn.wallpapersafari.com/53/47/4YNVas.jpg" alt="none" />
                                                    </div>
                                                </div>
                                                <div className="form-group row custom-form-row">
                                                    <label className="col-4 col-form-label">Final URL :</label>
                                                    <div className="col-8">
                                                        <input type="text" name="finalURL" placeholder="Final URL" className="form-control" required />
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
