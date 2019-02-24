import React, { Component } from 'react';

class FormCreateUser extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="input-group mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="">First and last name</span>
                        </div>
                        <input type="text" class="form-control" />
                        <input type="text" class="form-control" />
                    </div>
                    <div class="input-group mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="">Email address</span>
                        </div>
                        <input type="email" class="form-control" placeholder="david@gmail.com"/>
                    </div>
                    <div class="input-group mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="">Password and Password Confirm</span>
                        </div>
                        <input type="password" class="form-control" />
                        <input type="password" class="form-control" />
                    </div>
                    <div class="input-group mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="">Role</span>
                        </div>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Admin</option>
                            <option>Shop</option>
                            <option>User</option>
                        </select>
                    </div>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="">Add Avatar</span>
                        </div>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <button type="submit" class="btn btn-primary mb-4">Create</button>
                </form>
            </div>
        );
    }
}

export default FormCreateUser;