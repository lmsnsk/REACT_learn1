import stl from "./Preloader.module.css";
import preloader from "../../../assets/images/Circles-menu-3.gif";

let Preloader = (props) => {
  return <img className={stl.preloader} src={preloader} alt="preloader" />;
};

export default Preloader;
