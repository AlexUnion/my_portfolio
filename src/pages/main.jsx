import React from "react";

import Greeting from "../components/greeting/greeting.component";
import NavBar from "../components/navbar/navbar.component";
import WorkList from "../components/workList/workList.component";
import SkillList from "../components/skillList/skillList.component";
import Footer from "../components/footer/footer.component";

import works from "../data/works";

function Main() {
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

export default Main;