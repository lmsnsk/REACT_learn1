import { reduxForm, Field } from "redux-form";
import stl from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={stl.inputField}>
        <Field placeholder={"login"} name={"login"} component={"input"} />
      </div>
      <div className={stl.inputField}>
        <Field placeholder={"password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
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

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={stl.form}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
