import stl from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
  return (
    <div className={stl.userDialog}>
      <NavLink
        to={"/dialogs/" + props.id}
        className={(navData) =>
          navData.isActive ? stl.active : stl.userDialogNav
        }
      >
        <div className={stl.avatar}>
          <img src={props.url} alt="avatar" />
        </div>
        <p> {props.name}</p>
      </NavLink>
    </div>
  );
}

export default DialogItem;
