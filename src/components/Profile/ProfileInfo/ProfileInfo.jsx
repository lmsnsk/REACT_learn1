import Preloader from "../../common/Preloader/Preloader";
import stl from "./ProfileInfo.module.css";
import findjob from "../../../assets/images/findjob.jpg";
import userEmptyAvatar from "../../../assets/images/149071.png";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  let isFindingJob = () => {
    if (props.profile.lookingForAJob) {
      return <img className={stl.jobImg} src={findjob} alt="finding job" />;
    }
  };
  return (
    <div>
      <div>
        <img
          className={stl.maincontentimg}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="main-content-img"
        />
      </div>
      <div className={stl.profile}>
        {props.profile.photos.large !== null ? (
          <img className={stl.contentimg} src={props.profile.photos.large} alt="content-img" />
        ) : (
          <img className={stl.contentimg} src={userEmptyAvatar} alt="content-img" />
        )}
        <div className={stl.description}>
          <h2>{props.profile.fullName}</h2>
          <div>{isFindingJob()}</div>
          <p className={stl.decrtext}>{props.profile.lookingForAJobDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
