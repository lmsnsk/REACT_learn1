import stl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../utils/validators";

function Dialogs(props) {
  let dialogsEl = props.dialogsData.map((name) => (
    <DialogItem id={name.id} name={name.name} url={name.url} key={name.id} />
  ));

  let messagesEl = props.messagesData.map((mess) => <Message id={mess.id} text={mess.messageText} key={mess.id} />);

  function addNewMessage(values) {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItems}>{dialogsEl}</div>
      <div className={stl.messages}>{messagesEl}</div>
      <MessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        className={stl.enterMessage}
        cols="80"
        rows="4"
        name="newMessageBody"
        validate={[requiredField, maxLengthCreator(50)]}
        placeholder="Enter yor message..."
      />
      <button className={stl.btn}>Send</button>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  form: "addMessageForm",
})(AddMessageForm);

export default Dialogs;
