import React from "react";
import stl from "./User.module.css";
import userPic from "./../../../src/assets/images/149071.png";
import { NavLink } from "react-router-dom";

let User = ({ user, ...props }) => {
  return (
    <div className={stl.main}>
      <div className={stl.avaTitle}>
        <div className={stl.ava}>
          <NavLink to={"/ProfilePage/" + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPic} alt="avatar" />
          </NavLink>
        </div>
        <div className={stl.btn}>
          {user.followed ? (
            <button
              disabled={props.followingInProgress}
              onClick={() => {
                props.unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress}
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
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
  );
};

export default User;
