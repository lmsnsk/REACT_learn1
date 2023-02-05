import React from "react";
import stl from "./App.module.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfilePage from "./components/Profile/ProfilePage";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Sett from "./components/Sett/Sett";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <div className={stl.appWrapper}>
      <Header />
      <Sidebar store={props.store} />
      <div className={stl.appWrapperContent}>
        <Routes>
          <Route
            path="/Dialogs"
            element={<DialogsContainer store={props.store} />}
          />
          <Route
            path="/ProfilePage"
            element={<ProfilePage store={props.store} />}
          />
          <Route path="/News" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Sett" element={<Sett />} />
          <Route path="/Users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
