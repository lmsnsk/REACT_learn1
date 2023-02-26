import stl from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
  console.log("YO");
  let postElemets = props.postsData.map((userPost) => (
    <Post id={userPost.id} likesCount={userPost.likesCount} text={userPost.text} url={userPost.url} key={userPost.id} />
  ));
  function addPost(values) {
    props.addPost(values.post);
  }
  return (
    <div>
      <p className={stl.poststitle}>My posts</p>
      <AddPostReduxForm onSubmit={addPost} key={17} />
      {postElemets}
    </div>
  );
});

function AddPostsForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"Enter text..."}
        component={Textarea}
        name={"post"}
        cols="70"
        rows="3"
        validate={[requiredField, maxLengthCreator(20)]}
      />
      <button className={stl.btn}>Send post</button>
    </form>
  );
}

const AddPostReduxForm = reduxForm({
  form: "addPost",
})(AddPostsForm);

export default MyPosts;
