import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCounts,
  toggleFetching,
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCounts(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCounts(response.data.totalCount);
      });
  };

  render() {
    return (
      <>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>
        <Users
          onPageChanged={this.onPageChanged}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          key={this.props.currentPage}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     follow,
//     unfollow,
//     setUsers,
//     setCurrentPage,
//     setTotalUsersCounts,
//     toggleFetching,
//   };
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCounts,
  toggleFetching,
})(UsersContainer);
