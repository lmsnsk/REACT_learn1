import stl from "./Friend.module.css";

function Friend(props) {
  return (
    <div className={stl.friend}>
      <div className={stl.ava}>
        <img src={props.url} alt="avatar" />
      </div>
      <div className={stl.friendName}>{props.name}</div>
    </div>
  );
}

export default Friend;
