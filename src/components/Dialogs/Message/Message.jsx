import stl from "./Message.module.css";

function Message(props) {
  return <div className={stl.message}>{props.text}</div>;
}

export default Message;
