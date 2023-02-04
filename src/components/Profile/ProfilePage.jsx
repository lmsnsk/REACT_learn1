import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import stl from "./ProfilePage.module.css";

function ProfilePage(props) {
  return (
    <div className={stl.div}>
      <ProfileInfo />
      <MyPosts store={props.store} />
    </div>
  );
}

export default ProfilePage;
