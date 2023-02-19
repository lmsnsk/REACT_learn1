import Preloader from "../../common/Preloader/Preloader";
import stl from "./ProfileInfo.module.css";
import findjob from "../../../assets/images/findjob.jpg";
import userEmptyAvatar from "../../../assets/images/149071.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

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
      <div className={stl.profile}>
        {props.profile.photos.large !== null ? (
          <img className={stl.contentimg} src={props.profile.photos.large} alt="content-img" />
        ) : (
          <img className={stl.contentimg} src={userEmptyAvatar} alt="content-img" />
        )}
        <div className={stl.description}>
          <div className={stl.avaName}>
            <h2>{props.profile.fullName}</h2>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          </div>
          <div className={stl.job}>
            <div className={stl.jobImg}>{isFindingJob()}</div>
            <div>
              <p className={stl.decrtext}>{props.profile.lookingForAJobDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
