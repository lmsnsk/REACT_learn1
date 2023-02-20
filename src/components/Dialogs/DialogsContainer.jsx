import Dialogs from "./Dialogs";
import { sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

function mapStateToProps(state) {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
  };
}

export default compose(
  connect(mapStateToProps, {
    sendMessage,
  }),
  withAuthRedirect
)(Dialogs);
