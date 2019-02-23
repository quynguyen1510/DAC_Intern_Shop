import React, { Component } from 'react';

class Campaign extends Component {
    render() {
        return (
            <div className="page">
                <div>
                    <a href="#none" class="btn btn-default" id="btnCreateCampaign">Create Campaign</a>
                </div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Campaign Name</th>
                            <th>Status</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Budget</th>
                            <th>Bid amount</th>
                            <th>Creative Preview</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Doe</td>
                            <td>Active</td>
                            <td>02/09/2019</td>
                            <td>02/10/2019</td>
                            <td>100</td>
                            <td>100</td>
                            <td>Giảm giá</td>
                            <td>Siêu giảm giá lễ quốc khánh</td>
                            <td>Doe</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Campaign;