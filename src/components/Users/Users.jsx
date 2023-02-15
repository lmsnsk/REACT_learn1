import React from "react";
import stl from "./Users.module.css";
import userPic from "./../../../src/assets/images/149071.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={stl.switcher}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && stl.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((user) => (
        <div className={stl.main} key={user.id}>
          <div className={stl.avaTitle}>
            <div className={stl.ava}>
              <NavLink to={"/ProfilePage/" + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPic} alt="avatar" />
              </NavLink>
            </div>
            <div className={stl.btn}>
              {user.followed ? (
                <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
              )}
            </div>
          </div>
          <div className={stl.descriptionTitle}>
            <div>
              <NavLink to={"/ProfilePage"}>
                <div className={stl.name}>{user.name}</div>
              </NavLink>
              <div className={stl.status}>{user.status}</div>
            </div>
            <div className={stl.loc}>
              <div>{"user.location.city"},</div>
              <div>{"user.location.country"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
