import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import stl from "./Login.module.css";
import stll from "../common/FormsControls/FormsControls.module.css";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", Input, [requiredField, maxLengthCreator(30)])}
      {createField("password", "password", Input, [requiredField, maxLengthCreator(30)], { type: "password" })}
      {error && <span className={stll.error}>{error}</span>}
      {createField(null, "rememberMe", Input, [], { type: "checkbox" }, "remember me")}
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) return <Navigate to="/ProfilePage" />;
  return (
    <div className={stl.form}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
