import React, { useEffect, useState } from "react";
import stl from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={stl.status}>
      {!editMode ? (
        <div>
          <span onClick={activateEditMode}>{props.status || "No status:("}</span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            className={stl.input}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
