import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      {props.users.map((user) => (
        <User
          user={user}
          unfollow={props.unfollow}
          follow={props.follow}
          followingInProgress={props.followingInProgress}
          key={user.id}
        />
      ))}
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
    </div>
  );
};

export default Users;
