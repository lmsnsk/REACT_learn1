import stl from "./Header.module.css";

function Header() {
  return (
    <header className={stl.header}>
      <a className="logoLink" href="#">
        <img
          className={stl.logoimg}
          src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"
          alt="logo"
        />
      </a>
    </header>
  );
}

export default Header;
