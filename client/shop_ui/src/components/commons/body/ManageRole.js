import React, { Component } from 'react';

class ManageRole extends Component {
    render() {
        return (
            <div className="page">
                <div>
                    <a href="#none" class="btn btn-default" id="btnCreateRole">Create Role</a>
                </div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Role ID</th>
                            <th>Role Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Admin</td>
                            <td>
                                <a href="#none" class="btn btn-primary btnEditUser">Edit</a>
                                <a href="#none" class="btn btn-danger btnDeleteUser">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ManageRole;