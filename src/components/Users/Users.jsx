import axios from "axios";
import stl from "./Users.module.css";
import userPic from "./../../../src/assets/images/149071.png";
import React from "react";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div className={stl.main} key={user.id}>
            <div className={stl.avaTitle}>
              <div className={stl.ava}>
                <img src={user.photos.small != null ? user.photos.small : userPic} alt="avatar" />
              </div>
              <div className={stl.btn}>
                {user.followed ? (
                  <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => this.props.follow(user.id)}>Follow</button>
                )}
              </div>
            </div>
            <div className={stl.descriptionTitle}>
              <div className={stl.name}>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
              <div className={stl.loc}>
                <div>{"user.location.city"},</div>
                <div>{"user.location.country"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
