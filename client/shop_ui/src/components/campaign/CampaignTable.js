import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CampaignTable extends Component {
    render() {
        return (
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Khuyến mãi chào hè</td>
                        <td>Active</td>
                        <td>01/01/2019</td>
                        <td>11/01/2019</td>
                        <td>100</td>
                        <td>100</td>
                        <td><img className="product-row-img" alt="creative preview" src="https://thelyst.com/wp-content/uploads/2015/07/campaign-blog-graphic-01-1080x675.jpg" /></td>
                        <td>ABC</td>
                        <td>Khuyến mãi cực lớn chào hè</td>
                        <td>
                            <Link to={`#none`} className="btn btn-primary btnEditUser">Edit</Link>
                            <Link to={`none`} className="btn btn-danger btnDeleteUser">Delete</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default CampaignTable;