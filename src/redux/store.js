/*import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const NEW_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
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
    },
    messagesPage: {
      dialogsData: [
        {
          id: 1,
          name: "Петрович",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoiJ6m6tZBcv9FLCkSh7pHAmpRLREJa8SiOw&usqp=CAU",
        },
        {
          id: 2,
          name: "Эммануэль",
          url: "https://i.pinimg.com/236x/f3/fe/1d/f3fe1dd69bf54aa4822e9aab096afc62.jpg",
        },
        {
          id: 3,
          name: "Жмых",
          url: "https://img2.akspic.ru/previews/3/9/7/9/6/169793/169793-kalmar-netfliks-rukav-golovnoj_ubor-astronomicheskij_obekt-500x.jpg",
        },
        {
          id: 4,
          name: "Франсуа",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20m9wKPaT9wvUrI4y8Wshme78G5FETBf_SQ&usqp=CAU",
        },
        {
          id: 5,
          name: "Колено",
          url: "https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg",
        },
      ],
      messagesData: [
        { id: 1, messageText: "Привет, чувак! Чокаво?" },
        { id: 2, messageText: "Сколько пиво вчера выпил? Признавайся, алкаш" },
        { id: 3, messageText: "Я завтра не выйду на работу, Семен Петрович" },
        { id: 4, messageText: "Пипец голова после вчерашнего болит:(" },
        { id: 5, messageText: "Я обожрался)))))))))" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("Hey");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this.getState().profilePage = profileReducer(
      this.getState().profilePage,
      action
    );
    this.getState().messagesPage = dialogsReducer(
      this.getState().messagesPage,
      action
    );
    this._callSubscriber();
  },
};

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
*/
