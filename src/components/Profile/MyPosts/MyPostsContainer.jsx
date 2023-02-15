import MyPosts from "./MyPosts";
import { addPost, printNewPostText } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
}

export default connect(mapStateToProps, {
  addPost,
  printNewPostText,
})(MyPosts);
