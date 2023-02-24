import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";
import { connect } from "react-redux";
import {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleFollowing,
  follow,
  unfollow,
} from "../../redux/users-reducer";
import React from "react";
import { getUsers } from "../../redux/users-reducer";
import {
  getAllUsers,
  getCurrentPage,
  getFetching,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
          followSuccess={this.props.followSuccess}
          unfollowSuccess={this.props.unfollowSuccess}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          key={this.props.currentPage}
          toggleFollowing={this.props.toggleFollowing}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// }

function mapStateToProps(state) {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getFetching(state),
    followingInProgress: getFollowingInProgress(state),
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
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleFollowing,
  getUsers,
  follow,
  unfollow,
})(UsersContainer);
