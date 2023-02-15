import stl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {
  let dialogsEl = props.dialogsData.map((name) => (
    <DialogItem id={name.id} name={name.name} url={name.url} key={name.id} />
  ));

  let messagesEl = props.messagesData.map((mess) => <Message id={mess.id} text={mess.messageText} key={mess.id} />);

  function sendMessage() {
    props.sendMessage();
  }

  function updateMessageText(event) {
    let message = event.target.value;
    props.updateMessageText(message);
  }

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItems}>{dialogsEl}</div>
      <div className={stl.messages}>
        {messagesEl}
        <div>
          <textarea
            className={stl.enterMessage}
            onChange={updateMessageText}
            cols="80"
            rows="4"
            value={props.newMessageText}
            name="entermessage"
            placeholder="Enter yor message..."
          />
        </div>
        <button className={stl.btn} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Dialogs;
