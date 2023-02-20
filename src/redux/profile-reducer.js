import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    {
      id: 1,
      likesCount: 15,
      text: "Это мой первый пост!!!",
      url: "https://shapka-youtube.ru/wp-content/uploads/2021/03/kartinka-na-avatarku-dlya-devushek.jpg",
    },
    {
      id: 2,
      likesCount: 57,
      text: "Привет, народ",
      url: "https://kartinkivsem.ru/img/vyzdoravlivaj/kartinki-vyzdoravlivaj-1.jpg",
    },
    {
      id: 3,
      likesCount: 2,
      text: "Клевый сайт",
      url: "https://iecards.ru/wp-content/uploads/images/stories/virtuemart/product/prikolnaya-kartinka-parnu-kotoryj-nravitsya.jpg",
    },
    {
      id: 4,
      likesCount: 93,
      text: "А тут есть харумамбуру??",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gLH4En3BnVSk8UxNmPTU5DhXTNdK5QJQBw&usqp=CAU",
    },
  ],
  profile: null,
  status: "",
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        likesCount: 0,
        text: action.newPostText,
        url: "https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg",
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
}

export default profileReducer;

export function addPost(newPostText) {
  return { type: ADD_POST, newPostText };
}

function setUserProfile(profile) {
  return { type: SET_USER_PROFILE, profile };
}

export function setStatus(status) {
  return { type: SET_STATUS, status };
}

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
