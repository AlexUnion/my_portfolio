import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import works from './data/works';

import Greeting from "./components/greeting/greeting.component";
import NavBar from "./components/navbar/navbar.component";
import WorkList from "./components/workList/workList.component";
import SkillList from "./components/skillList/skillList.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
      <>
        <Greeting/>
        <NavBar/>
        <WorkList list={works}/>
        <SkillList/>
        <Footer/>
      </>
  );
}

export default App;
