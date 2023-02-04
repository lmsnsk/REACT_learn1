import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import stl from "./ProfilePage.module.css";

function ProfilePage(props) {
  return (
    <div className={stl.div}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default ProfilePage;
