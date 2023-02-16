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
  toggleFollowing,
} from "../../redux/users-reducer";
import React from "react";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCounts(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCounts(data.totalCount);
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
          toggleFollowing={this.props.toggleFollowing}
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
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
  toggleFollowing,
})(UsersContainer);
