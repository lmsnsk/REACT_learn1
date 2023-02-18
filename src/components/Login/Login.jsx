import stl from "./Login.module.css";

const Login = () => {
  return (
    <div className={stl.wrapper}>
      <div className={stl.form}>
        <div className={stl.inputField}>
          <span>Login</span>
          <input type="text" name={stl.login} id="log" />
        </div>
        <div className={stl.inputField}>
          <span>Password</span>
          <input type="text" name={stl.password} id="log" />
        </div>
      </div>
    </div>
  );
};

export default Login;
