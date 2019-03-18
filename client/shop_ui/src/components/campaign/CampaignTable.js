import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCampaigns } from '../../api/campaign';
import { RECORD_PER_PAGE } from '../../util/constant';

class CampaignTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
            total: 0
        }
    }

    componentDidMount() {
        getCampaigns().then(res => {
            this.setState({ campaigns: [...res.data.campaigns], total: res.data.total })
        }).catch(err => {
            this.setState({ total: 0 })
        })

    }

    render() {
        const { campaigns, total } = this.state;
        let numPages = 0;
        if(total % RECORD_PER_PAGE !== 0){
            numPages = Array(Math.floor(total/ RECORD_PER_PAGE) + 1).fill();
        }
        else{
            numPages = Array(Math.floor(total/ RECORD_PER_PAGE)).fill()
        }
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Campaign Name</th>
                            <th>Status</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Budget</th>
                            <th>Bid amount</th>
                            <th>Creative Preview</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            campaigns ? (
                                campaigns.map((camp, index) => (
                                    <tr key={index}>
                                        <td>{camp.name}</td>
                                        <td>{camp.status ? "Active" : "Non Active"}</td>
                                        <td>{camp.startdate}</td>
                                        <td>{camp.enddate}</td>
                                        <td>{camp.budget}</td>
                                        <td>{camp.bid}</td>
                                        <td>
                                            <img className="product-row-img" 
                                                    alt="creative preview" 
                                                    src={camp.campaignimg ? camp.campaignimg : "https://thelyst.com/wp-content/uploads/2015/07/campaign-blog-graphic-01-1080x675.jpg"} />
                                        </td>
                                        <td>{camp.title}</td>
                                        <td>{camp.description}</td>
                                        <td>{camp.final_url}</td>
                                        <td>
                                            <Link to={{pathname: `/campaigns/${camp.id}`, state: {camp: camp}}} className="btn btn-primary btnEditUser">Edit</Link>
                                            <Link to={`none`} className="btn btn-danger btnDeleteUser">Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            ) : <div className="invalid-feedback">There is no campaign</div>
                        }
                    </tbody>
                </table>
                {
                    (total > 0) && (
                        <nav aria-label="...">
                            <ul className="pagination pagination-lg">
                                {
                                    numPages.map((_, i) => (
                                        <button key={i} onClick={this.getCurrentPage} className="page-link" >{i + 1}</button>
                                    ))
                                }
                            </ul>
                        </nav>
                    )
                }
            </div>

        );
    }
}

export default CampaignTable;