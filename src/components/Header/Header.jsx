import stl from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={stl.header}>
      <a className={stl.logoLink} href="#">
        <img
          className={stl.logoimg}
          src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"
          alt="logo"
        />
      </a>
      <div className={stl.loginBlock}>{props.isAuth ? props.login : <NavLink to="/login">Log in</NavLink>}</div>
    </header>
  );
}

export default Header;
