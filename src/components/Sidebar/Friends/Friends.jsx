import stl from "./Friends.module.css";
import Friend from "./Friend/Friend";

function Friends(props) {
  let friendsElemets = props.store
    .getState()
    .messagesPage.dialogsData.map((friend) => (
      <Friend id={friend.id} name={friend.name} url={friend.url} />
    ));
  return <div className={stl.friendsBox}> {friendsElemets}</div>;
}

export default Friends;
