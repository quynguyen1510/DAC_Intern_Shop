import React, { Component } from 'react';

class FormUpdateProfile extends Component {
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
                        <input type="text" readonly className="form-control-plaintext pl-2" id="staticEmail" value="email@example.com"/>
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
                            <span className="input-group-text" id="">Avatar</span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">Update</button>
                </form>
            </div>
        );
    }
}

export default FormUpdateProfile;