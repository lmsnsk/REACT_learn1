import Dialogs from "./Dialogs";
import { sendMessage, updateMessageText } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
  };
}

export default connect(mapStateToProps, {
  sendMessage,
  updateMessageText,
})(Dialogs);
