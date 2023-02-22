import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export default authReducer;

function setAuthUserData(userId, email, login, isAuth) {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
}

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.authing().then((data) => {
      let { id, email, login } = data.data;
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let messages = data.messages.length > 0 ? data.messages : "Some Error";
        dispatch(
          stopSubmit("login", {
            _error: messages,
          })
        );
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, false));
      }
    });
  };
};
