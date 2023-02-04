import stl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {
  sendMessageActionCreator,
  newMessageTextActionCreator,
} from "../../redux/store";

function Dialogs(props) {
  let dialogsEl = props.store
    .getState()
    .messagesPage.dialogsData.map((name) => (
      <DialogItem id={name.id} name={name.name} url={name.url} />
    ));

  let messagesEl = props.store
    .getState()
    .messagesPage.messagesData.map((mess) => (
      <Message id={mess.id} text={mess.messageText} />
    ));

  //let newMessageElement = React.createRef();

  function onSendMessageClick() {
    props.store.dispatch(sendMessageActionCreator());
  }

  function onTextMessageChange(event) {
    let message = event.target.value;
    //let message = newMessageElement.current.value;
    props.store.dispatch(newMessageTextActionCreator(message));
  }

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItems}>{dialogsEl}</div>
      <div className={stl.messages}>
        {messagesEl}
        <div>
          <textarea
            //ref={newMessageElement}
            className={stl.enterMessage}
            onChange={onTextMessageChange}
            cols="80"
            rows="4"
            value={props.store.getState().messagesPage.newMessageText}
            name="entermessage"
            placeholder="Enter yor message..."
          />
        </div>
        <button className={stl.btn} onClick={onSendMessageClick}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Dialogs;
