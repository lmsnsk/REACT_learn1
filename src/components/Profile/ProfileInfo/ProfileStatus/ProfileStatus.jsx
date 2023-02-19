import React from "react";
import stl from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    console.log(this.props.status);
    return (
      <div className={stl.status}>
        {!this.state.editMode ? (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status || "No status:("}</span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              className={stl.input}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;