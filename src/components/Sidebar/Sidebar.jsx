import { NavLink } from "react-router-dom";
import stl from "./Sidebar.module.css";
import Friends from "./Friends/Friends";

function Sidebar(props) {
  return (
    <nav className={stl.sidebar}>
      <ul className={stl.listnav}>
        <li className={stl.listnavpoint}>
          <NavLink
            to="/ProfilePage"
            className={(navData) =>
              navData.isActive ? stl.active : stl.listnavpoint
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={stl.listnavpoint}>
          <NavLink
            to="/Dialogs"
            className={(navData) =>
              navData.isActive ? stl.active : stl.listnavpoint
            }
          >
            Messages
          </NavLink>
        </li>
        <li className={stl.listnavpoint}>
          <NavLink
            to="/News"
            className={(navData) =>
              navData.isActive ? stl.active : stl.listnavpoint
            }
          >
            News
          </NavLink>
        </li>
        <li className={stl.listnavpoint}>
          <NavLink
            to="/Music"
            className={(navData) =>
              navData.isActive ? stl.active : stl.listnavpoint
            }
          >
            Music
          </NavLink>
        </li>
        <hr />
        <li className={stl.listnavpoint}>
          <NavLink
            to="/Sett"
            className={(navData) =>
              navData.isActive ? stl.active : stl.listnavpoint
            }
          >
            Settings
          </NavLink>
        </li>
        <hr />
        <li>
          <p className={stl.title}>Friends:</p>
          <Friends store={props.store} />
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
