import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { deleteExistingUser} from '../../actions/UsersAction';

class DeleteUser extends Component {
    componentDidMount(){
        const userId = this.props.match.params.id;
        const token = localStorage.getItem("token");
        this.props.deleteExistingUser(token, userId);
        console.log(this.props.match)
        this.props.history.goBack();
    }
    render() {
        return (
            <div > 
        </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        deleteExistingUser
    }, dispatch)
}

const DeleteUserContainer = withRouter(connect(null, mapDispatchToProps)(DeleteUser));

export default DeleteUserContainer;