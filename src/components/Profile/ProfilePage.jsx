import React from "react";
import { Navigate } from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import stl from "./ProfilePage.module.css";

function ProfilePage(props) {
  if (!props.isAuth) return <Navigate to="/Login" />;

  return (
    <div className={stl.div}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default ProfilePage;
