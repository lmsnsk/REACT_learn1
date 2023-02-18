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
      return { ...state, ...action.data, isAuth: true };
    }
    default:
      return state;
  }
}

export default authReducer;

function setAuthUserData(userId, email, login) {
  return { type: SET_USER_DATA, data: { userId, email, login } };
}

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.authing().then((data) => {
      let { id, email, login } = data.data;
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};
