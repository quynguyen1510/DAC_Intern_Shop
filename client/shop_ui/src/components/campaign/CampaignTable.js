import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCampaigns, deleteCampaign, getCampaignsByShop } from '../../api/campaign_api';
import { RECORD_PER_PAGE, ADMIN_ROLE, SHOPPER_ROLE } from '../../util/constant';
import { Modal, Button } from 'react-bootstrap';
import {withRouter} from 'react-router';
var jwt_decode = require('jwt-decode');

class CampaignTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
            total: 0,
            shouldShow: false,
            selectedCampId: null,
            numPages: null,
            currentPage: this.props.location.state ? this.props.location.state.page : 1
        }
    }

    handleClose = () => {
        this.setState({ shouldShow: false });
    }

    handleShow = (index) => {
        this.setState({selectedCampId: index, shouldShow: true });
    }

    handleDelete = () =>{
        const camps =  this.state.campaigns;
        camps[this.state.selectedCampId].status = false;
        this.setState({campaigns: [...camps]});

        // call api 
        deleteCampaign( camps[this.state.selectedCampId].id).then( res => {
            alert(res.data.message);
        }).catch(err => {
            
        })
        this.handleClose();
    }

    componentDidMount() {
        const {role_id, user_id} = jwt_decode(localStorage.getItem("token"));
        if(this.state.campaigns.length === 0){
            if(role_id === ADMIN_ROLE){
                getCampaigns(this.state.currentPage).then(res => {
                    this.setState({ campaigns: [...res.data.campaigns], total: res.data.total });
                    let numPages = 0;
                    if (res.data.total % RECORD_PER_PAGE !== 0) {
                        numPages = Array(Math.floor(res.data.total / RECORD_PER_PAGE) + 1).fill();
                    }
                    else {
                        numPages = Array(Math.floor(res.data.total / RECORD_PER_PAGE)).fill();
                    }
                    this.setState({numPages: numPages})
                }).catch(err => {
                    console.log(err);
                })
            }
            else if(role_id === SHOPPER_ROLE){
                getCampaignsByShop(this.state.currentPage, user_id).then(res => {
                    this.setState({ campaigns: [...res.data.campaigns], total: res.data.total });
                    let numPages = 0;
                    if (res.data.total % RECORD_PER_PAGE !== 0) {
                        numPages = Array(Math.floor(res.data.total / RECORD_PER_PAGE) + 1).fill();
                    }
                    else {
                        numPages = Array(Math.floor(res.data.total / RECORD_PER_PAGE)).fill();
                    }
                    this.setState({numPages: numPages})
                }).catch(err => {
                    console.log(err);
                })
            }
       }
    }

    getCurrentPage = (event) => {
        const page = Number(event.target.innerHTML);
        if(this.state.currentPage !== page){
            getCampaigns(page).then(res => {
                this.setState({ campaigns: [...res.data.campaigns]});
            }).then(err => {
                
            })
            this.setState({currentPage: page})
        }
    }

    render() {
        const {numPages, campaigns} = this.state;
        return (
            <div>
                <div>
                    <Link to="/campaigns/new" className="btn btn-default" id="btnCreateUser">Create Campaign</Link>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Campaign Name</th>
                            <th>Status</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Budget</th>
                            <th>Bid amount</th>
                            <th>Spend</th>
                            <th>Creative Preview</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>URL</th>
                            <th>Owner</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            campaigns ? (
                                campaigns.map((camp, index) => (
                                    <tr key={index}>
                                        <td className="pretty-text">{camp.name}</td>
                                        <td>{camp.status ? "Active" : "Non Active"}</td>
                                        <td>{camp.startdate}</td>
                                        <td>{camp.enddate}</td>
                                        <td>{camp.budget}</td>
                                        <td>{camp.bid}</td>
                                        <td>{camp.spend ? camp.spend : 0}</td>
                                        <td>
                                            <img className="product-row-img"
                                                alt="creative preview"
                                                src={camp.campaignimg ? camp.campaignimg : "https://thelyst.com/wp-content/uploads/2015/07/campaign-blog-graphic-01-1080x675.jpg"} />
                                        </td>
                                        <td className="pretty-text">{camp.title}</td>
                                        <td className="pretty-text">{camp.description}</td>
                                        <td>{camp.final_url}</td>
                                        <td>{camp.shop_email}</td>
                                        <td>
                                            <Link to={{ 
                                                        pathname: `/campaigns/${camp.id}`, 
                                                        state: { camp: camp, page: this.state.currentPage } 
                                                    }} 
                                                  className="btn btn-primary btnEditUser">
                                                  Edit
                                            </Link>
                                            <Button onClick={() => {this.handleShow(index)}} className="btn btn-danger btnDeleteUser">Delete</Button>
                                        </td>
                                    </tr>
                                ))
                            ) : <div className="invalid-feedback">There is no campaign</div>
                        }
                    </tbody>
                </table>
                {
                    (numPages !== null) && (
                        <nav aria-label="...">
                            <ul className="pagination pagination-lg">
                                {
                                    numPages.map((_, i) => (
                                       <li key={i} className="page-item">
                                         <button  onClick={this.getCurrentPage} 
                                            className="page-link" >{i + 1}</button>
                                       </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    )
                }

                <Modal show={this.state.shouldShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete This Campaign</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}

export default withRouter(CampaignTable);