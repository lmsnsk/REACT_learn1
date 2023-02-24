import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

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
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
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
export const getUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    dispatch(setCurrentPage(page));
    userAPI.getUsers(page, pageSize).then((data) => {
      dispatch(toggleFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCounts(data.totalCount));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true));
    userAPI.removeFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowing(false));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true));
    userAPI.getFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowing(false));
    });
  };
};
