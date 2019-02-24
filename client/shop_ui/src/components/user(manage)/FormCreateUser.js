import React, { Component } from 'react';

class FormCreateUser extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">First and last name</span>
                        </div>
                        <input type="text" className="form-control" />
                        <input type="text" className="form-control" />
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Email address</span>
                        </div>
                        <input type="email" className="form-control" placeholder="david@gmail.com"/>
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Password and Password Confirm</span>
                        </div>
                        <input type="password" className="form-control" />
                        <input type="password" className="form-control" />
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Role</span>
                        </div>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Admin</option>
                            <option>Shop</option>
                            <option>User</option>
                        </select>
                    </div>
                     <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Add Avatar</span>
                        </div>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">Create</button>
                </form>
            </div>
        );
    }
}

export default FormCreateUser;