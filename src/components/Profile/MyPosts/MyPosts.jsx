import stl from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";

function MyPosts(props) {
  let postElemets = props.postsData.map((userPost) => (
    <Post id={userPost.id} likesCount={userPost.likesCount} text={userPost.text} url={userPost.url} key={userPost.id} />
  ));
  function addPost(values) {
    props.addPost(values.post);
  }
  return (
    <div>
      <p className={stl.poststitle}>My posts</p>
      <AddPostReduxForm onSubmit={addPost} />
      {postElemets}
    </div>
  );
}

function AddPostsForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={"Enter text..."} component={"textarea"} name={"post"} cols="70" rows="3" />
      <button className={stl.btn}>Send post</button>
    </form>
  );
}

const AddPostReduxForm = reduxForm({
  form: "addPost",
})(AddPostsForm);

export default MyPosts;
