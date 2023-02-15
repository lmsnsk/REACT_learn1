const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 100,
  currentPage: 1,
  isFetching: false,
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
    default:
      return state;
  }
}

export function follow(userId) {
  return { type: FOLLOW, userId };
}

export function unfollow(userId) {
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

export default usersReducer;
