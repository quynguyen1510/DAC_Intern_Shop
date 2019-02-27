import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { getListUsers, getUsersSize } from '../../actions/UsersAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RECORD_PER_PAGE } from '../../util/constant';
import { Link } from 'react-router-dom';
import UserTable from './UserTable';

class ManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.match.params.page_number,
            token:  localStorage.getItem("token")
        }
    }

    componentDidMount() {
        const {token, currentPage} = this.state;
        this.props.getUsersSize(token);

        if (this.state.currentPage) {
            this.props.getListUsers(this.state.token, currentPage);        
        }
    }

    getCurrentPage = () => {
        this.setState({currentPage: this.props.match.params.page_number})
    }
    
    render() {
        const { size } = this.props.user;
        const userPages = (size % RECORD_PER_PAGE !== 0) ? (size / RECORD_PER_PAGE) + 1 : (size / RECORD_PER_PAGE);
        const convertedArrayPages = Array(Math.floor(userPages)).fill();
        const usersPerPage = this.props.user.users;
        return (
            <div className="page">
                <div>
                    <Link to="/users/new" className="btn btn-default" id="btnCreateUser">Create User</Link>
                </div>
                <UserTable usersPerPage={usersPerPage}/>
                <nav aria-label="...">
                    <ul className="pagination pagination-lg">
                        {
                            convertedArrayPages.map((_, i) =>
                                <li key={i} className="page-item"><a onClick={this.getCurrentPage} className="page-link" href={`/manage/users/${i+1}`} >{ i + 1}</a></li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUsersSize,
        getListUsers
    }, dispatch)
}

const ManageUserContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageUser));

export default ManageUserContainer;