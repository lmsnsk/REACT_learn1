const SEND_MESSAGE = "SEND-MESSAGE";
const NEW_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";

let initialState = {
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
};

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 5,
        messageText: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, newMessage],
      };
    }
    case NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.newMessage };
    }
    default:
      return state;
  }
}

export default dialogsReducer;

export function sendMessage() {
  return { type: SEND_MESSAGE };
}

export function updateMessageText(message) {
  return { type: NEW_MESSAGE_TEXT, newMessage: message };
}
