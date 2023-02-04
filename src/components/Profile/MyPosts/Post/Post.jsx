import stl from "./Post.module.css";

function Post(props) {
  return (
    <div className={stl.post}>
      <div className={stl.postText}>
        <img className={stl.postimg} src={props.url} alt="avatar" />
        <p>{props.text}</p>
      </div>
      <div className={stl.likeStl}>
        <p>likes: {props.likesCount}</p>
      </div>
    </div>
  );
}

export default Post;
