import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Componennt) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to="/Login" />;
    return <Componennt {...props} />;
  };

  let ConnectedAuthRedirectContainer = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectContainer;
};
