import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  newMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateMessageText: (action) => {
      dispatch(newMessageTextActionCreator(action));
    },
  };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
