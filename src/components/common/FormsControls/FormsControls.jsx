import { Field } from "redux-form";
import stl from "./FormsControls.module.css";

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const chekTouchAndError = touched && error;
  return (
    <div>
      <div className={stl.formcontrol + " " + (chekTouchAndError ? stl.error : "")}>
        <textarea {...input} {...props} />
        {chekTouchAndError && <span>{error}</span>}
      </div>
    </div>
  );
};

export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const chekTouchAndError = touched && error;
  return (
    <div>
      <div className={stl.formcontrol + " " + (chekTouchAndError ? stl.error : "")}>
        <input {...input} {...props} />
        {chekTouchAndError && <span>{error}</span>}
      </div>
    </div>
  );
};

export const createField = (placeholder, name, component, validate, props, text = "") => (
  <div>
    <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props} text /> {text}
  </div>
);
