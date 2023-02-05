import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  newPostTextActionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewText: (action) => {
      dispatch(newPostTextActionCreator(action));
    },
  };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
