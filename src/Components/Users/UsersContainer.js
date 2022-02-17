import React from "react";
import {connect} from "react-redux";
import UsersPresentation from "./UsersPresentation";
import {
    setCurPage,
    setLoading,
    setUsersApi
} from "../../redux/redusers/usersReduser"

class Users extends React.Component{
    componentDidMount() {
        this.sendUpdateUsers(true)
    }

    /**
     *
     * @bool isSetAllPage
     */
    sendUpdateUsers(isSetAllPage = false) {
        this.props.setUsersApi(this.props.pagination.limit, this.props.pagination.current, isSetAllPage, this.props.isLoading);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.pagination.current !== this.props.pagination.current) {
            this.sendUpdateUsers(false);
        }
    }

    paginClickHandler(num) {
        this.props.setLoading(!this.props.isLoading);
        this.props.setCurPage(num);
    }

    render() {
        return (
            <UsersPresentation
                isLoading={this.props.isLoading}
                users={this.props.users}
                pagination={this.props.pagination}
                paginClickHandler={this.paginClickHandler.bind(this)}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination,
        isLoading: state.usersPage.isLoading
    }
}

let usersContainer = connect(mapStateToProps, {
    setCurPage,
    setLoading,
    setUsersApi
})(Users);

export default usersContainer;

