import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "APP/SET_INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
}

export function initializedSuccess() {
  return { type: SET_INITIALIZED_SUCCESS };
}

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
