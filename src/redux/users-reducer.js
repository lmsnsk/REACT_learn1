import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helper";

const FOLLOW = "USERS/FOLLOW";
const UNFOLLOW = "USERS/UNFOLLOW";
const SET_USERS = "USERS/SET_USERS";
const SET_CURRENT_PAGE = "USERS/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "USERS/SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "USERS/TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "USERS/TOOGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 100,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsers };
    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOOGLE_IS_FOLLOWING_PROGRESS:
      return { ...state, followingInProgress: action.followingInProgress };
    default:
      return state;
  }
}

export function followSuccess(userId) {
  return { type: FOLLOW, userId };
}

export function unfollowSuccess(userId) {
  return { type: UNFOLLOW, userId };
}

export function setUsers(users) {
  return { type: SET_USERS, users };
}

export function setCurrentPage(currentPage) {
  return { type: SET_CURRENT_PAGE, currentPage };
}

export function setTotalUsersCounts(totalUsers) {
  return { type: SET_TOTAL_USERS_COUNT, totalUsers };
}

export function toggleFetching(isFetching) {
  return { type: TOOGLE_IS_FETCHING, isFetching };
}

export function toggleFollowing(followingInProgress) {
  return { type: TOOGLE_IS_FOLLOWING_PROGRESS, followingInProgress };
}

export default usersReducer;

//ThunkCreator
export const getUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleFetching(true));
  dispatch(setCurrentPage(page));
  let data = await userAPI.getUsers(page, pageSize);
  dispatch(toggleFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCounts(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowing(true));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowing(false));
};

export const unfollow = (userId) => async (dispatch) => {
  let apiMethod = userAPI.removeFollow.bind(userAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
};

export const follow = (userId) => async (dispatch) => {
  let apiMethod = userAPI.getFollow.bind(userAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
};
