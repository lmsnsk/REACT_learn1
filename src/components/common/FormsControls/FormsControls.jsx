import stl from "./FormsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const chekTouchAndError = meta.touched && meta.error;
  return (
    <div>
      <div className={stl.formcontrol + " " + (chekTouchAndError ? stl.error : "")}>
        <textarea {...input} {...props} />
        {chekTouchAndError && <span>{meta.error}</span>}
      </div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const chekTouchAndError = meta.touched && meta.error;
  return (
    <div>
      <div className={stl.formcontrol + " " + (chekTouchAndError ? stl.error : "")}>
        <input {...input} {...props} />
        {chekTouchAndError && <span>{meta.error}</span>}
      </div>
    </div>
  );
};
