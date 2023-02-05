import stl from "./Users.module.css";

function Users(props) {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: "Dmitry K.",
        photoUrl:
          "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
        status: "Iam a boss!",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        followed: true,
        fullName: "Elena S.",
        photoUrl:
          "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
        status: "I am so pretty...",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        followed: false,
        fullName: "Cristofer H.",
        photoUrl:
          "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
        status: "Fuck you Spilberg",
        location: { city: "Oslo", country: "Norway" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div className={stl.main} key={u.id}>
          <div className={stl.avaTitle}>
            <div className={stl.ava}>
              <img src={u.photoUrl} alt="ava" />
            </div>
            <div className={stl.btn}>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </div>
          <div className={stl.descriptionTitle}>
            <div className={stl.name}>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div className={stl.loc}>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
