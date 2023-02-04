import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const NEW_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";

export function addPostActionCreator() {
  return { type: ADD_POST };
}

export function newPostTextActionCreator(text) {
  return { type: NEW_POST_TEXT, newText: text };
}

export function sendMessageActionCreator() {
  return { type: SEND_MESSAGE };
}

export function newMessageTextActionCreator(message) {
  return { type: NEW_MESSAGE_TEXT, newMessage: message };
}

export default store;
