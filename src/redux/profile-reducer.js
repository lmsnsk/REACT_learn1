const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";

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
  newPostText: "",
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        likesCount: 0,
        text: state.newPostText,
        url: "https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg",
      };
      return {
        ...state,
        newPostText: "",
        postsData: [...state.postsData, newPost],
      };

    case NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
}

export default profileReducer;

export function addPostActionCreator() {
  return { type: ADD_POST };
}

export function newPostTextActionCreator(text) {
  return { type: NEW_POST_TEXT, newText: text };
}
