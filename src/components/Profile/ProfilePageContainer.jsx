import React, { useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

// class ProfilePageContainer extends React.Component {
//   componentDidMount() {
//     let userId = this.props.router.params.userId;
//     if (!userId) {
//       userId = this.props.autorizedUserId;
//     }
//     this.props.getProfile(userId);
//     this.props.getStatus(userId);
//   }
//   render() {
//     return (
//       <div>
//         <ProfilePage
//           {...this.props}
//           profile={this.props.profile}
//           status={this.props.status}
//           updateStatus={this.props.updateStatus}
//         />
//       </div>
//     );
//   }
// }

const ProfilePageContainer = (props) => {
  // componentDidMount() {
  //   let userId = props.router.params.userId;
  //   if (!userId) {
  //     userId = props.autorizedUserId;
  //   }
  //   props.getProfile(userId);
  //   props.getStatus(userId);
  // }

  useEffect(() => {
    let userId = props.router.params.userId;
    if (!userId) {
      userId = props.autorizedUserId;
    }
    props.getProfile(userId);
    props.getStatus(userId);
  });

  return (
    <div>
      <ProfilePage {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withAuthRedirect,
  withRouter
)(ProfilePageContainer);
