import React from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { Route, Routes } from "react-router-dom";
import stl from "./App.module.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfilePageContainer from "./components/Profile/ProfilePageContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Sett from "./components/Sett/Sett";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className={stl.appWrapper}>
          <HeaderContainer store={this.props.store} />
          <Sidebar store={this.props.store} />
          <div className={stl.appWrapperContent}>
            <Routes>
              <Route path="/Dialogs" element={<DialogsContainer store={this.props.store} />} />
              <Route path="/ProfilePage/:userId?" element={<ProfilePageContainer store={this.props.store} />} />
              <Route path="/News" element={<News />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/Sett" element={<Sett />} />
              <Route path="/Users" element={<UsersContainer store={this.props.store} />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
