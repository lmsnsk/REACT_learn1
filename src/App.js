import React from "react";
import stl from "./App.module.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfilePageContainer from "./components/Profile/ProfilePageContainer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Sett from "./components/Sett/Sett";
import UsersContainer from "./components/Users/UsersContainer";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className={stl.appWrapper}>
      <Header />
      <Sidebar store={props.store} />
      <div className={stl.appWrapperContent}>
        <Routes>
          <Route path="/Dialogs" element={<DialogsContainer store={props.store} />} />
          <Route path="/ProfilePage/*" element={<ProfilePageContainer store={props.store} />} />
          <Route path="/News" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Sett" element={<Sett />} />
          <Route path="/Users" element={<UsersContainer store={props.store} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
