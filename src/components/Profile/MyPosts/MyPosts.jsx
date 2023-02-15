import stl from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {
  let postElemets = props.postsData.map((userPost) => (
    <Post id={userPost.id} likesCount={userPost.likesCount} text={userPost.text} url={userPost.url} key={userPost.id} />
  ));

  function addPost() {
    props.addPost();
  }

  function printNewPostText(event) {
    let text = event.target.value;
    props.printNewPostText(text);
  }

  return (
    <div className={stl.posts}>
      <p className={stl.poststitle}>My posts</p>
      <div>
        <textarea
          onChange={printNewPostText}
          value={props.newPostText}
          className={stl.input}
          name="enterpost"
          cols="70"
          rows="3"
        />
      </div>
      <div>
        <button className={stl.btn} onClick={addPost}>
          Send post
        </button>
      </div>
      {postElemets}
    </div>
  );
}

export default MyPosts;
