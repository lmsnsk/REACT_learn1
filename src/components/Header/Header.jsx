import stl from "./Header.module.css";
import { Navigate, NavLink } from "react-router-dom";

function Header(props) {
  const logoutAndRedirect = () => {
    props.logout();
    return <Navigate to="/Login" />;
  };
  return (
    <header className={stl.header}>
      <a className={stl.logoLink} href="#1">
        <img
          className={stl.logoimg}
          src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"
          alt="logo"
        />
      </a>
      <div className={stl.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button onClick={logoutAndRedirect} className={stl.logoutBtn}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/Login">Log in</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
