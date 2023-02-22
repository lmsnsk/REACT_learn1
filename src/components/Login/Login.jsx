import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";
import stl from "./Login.module.css";
import stll from "../common/FormsControls/FormsControls.module.css";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[requiredField, maxLengthCreator(30)]}
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          name={"password"}
          component={Input}
          validate={[requiredField, maxLengthCreator(30)]}
          type={"password"}
        />
      </div>
      {props.error && <span className={stll.error}>{props.error}</span>}
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        remember me
      </div>
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
