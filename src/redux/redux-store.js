import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import setAuthUserData from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: setAuthUserData,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
