import React, { Component } from 'react';

class FormCreateProduct extends Component {
    render() {
        return (
            <div>
                <form encType="multipart/form-data">
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Name</label>
                            <input type="text"
                                name="first_name"
                                className="form-control"
                            />
                        </div>
                        <div className="invalid-feedback"></div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Description</label>
                            <input type="text" name="last_name" className="form-control" />
                            <div className="invalid-feedback"></div>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Price</label>
                            <input type="email" className="form-control" name="email" />
                        </div>
                        <div className="invalid-feedback"></div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Category Name</label>
                            <select className="form-control">
                                <option value="1">Điện tử</option>
                                <option value="2">Đồ mẹ & bé</option>
                                <option value="3">Du lịch</option>
                            </select>
                        </div>
                        <div className="invalid-feedback"></div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Image</label>
                            <div className="col-sm-12">
                                <input type="file" className="custom-file-input" id="uploadImage" />
                                <label htmlFor="uploadImage" className="custom-file-label">Choose File</label>
                            </div>
                        </div>
                    </div>

                </form>
                <div className="submit-profile justify-content-center">
                    <button className="btn btn-primary update-profile-button">Create</button>
                </div>
            </div>
        );
    }
}

export default FormCreateProduct;
