import profileReducer, { addPost } from "./profile-reducer";

test("new post should be added", () => {
  let action = addPost("holy C");
  let state = {
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
  };
  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(5);
});
