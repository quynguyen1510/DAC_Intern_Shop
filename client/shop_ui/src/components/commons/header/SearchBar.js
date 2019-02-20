import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="col-md-8 nav-search">
                <form>
                    <div className="input-group" id="searchFrom">
                        <input type="text" placeholder="Tìm kiếm..." />
                        <div className="input-group-append">
                            <button id="btnSearch" className="btn btn-secondary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;