import React, { useEffect, useState } from "react";
import axios from "axios";
import WelcomePage from "./pages/welcomePage/WelcomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import Wrapper from "./component/wrapper/Wrapper";
import Education from "./pages/education/Education";
import Navbar from "./component/navbar/Navbar";
import actionCreator from "./actionCreator/ActionCreator";
import store from "./store/Store";
import Project from "./pages/project/Project";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import data from "./data/Data";
const App = () => {
  const [state, setState] = useState(false);
  const location = useLocation();
  console.log("location", location);

  // useEffect(() => {
  //   // data(state)
  //   axios
  //     .get("http://localhost:3000/boolean")
  //     .then((res) => {
  //       setState(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(state);

  // useEffect(() => {
  //   store.dispatch(actionCreator({ state, setState }));
  // }, [state]);

  return (
    <div>
      {location.pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Wrapper />} />
        <Route path="/education" element={<Education />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
