import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import debounce from "../tool/debounce";
import Greeting from "../components/greeting/greeting.component";
import NavBar from "../components/navbar/navbar.component";
import WorkList from "../components/workList/workList.component";
import SkillList from "../components/skillList/skillList.component";
import Footer from "../components/footer/footer.component";
import Layout from "../layout/Layout";
import works from "../data/works";

const elementObj = {
    element: null,
    isDisplay: false,
}

const style = StyleSheet.create({
    topNavigation: {
        height: '100px',
        backgroundColor: 'rgba(255, 255, 255, .35)',
        position: 'absolute',
    },
    middleNavigation: {
        backgroundColor: '#333',
        position: 'fixed',
    },
    hideNav: {
        height: '0',
        opacity: '0',
    },
    displayNav: {
        height: '80px',
        opacity: '1',
    },
    navigation: {
        display: 'flex',
        width: '100%',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'height .3s linear, opacity .3s linear',
    }
})

function handleScroll(setDisplay) {
    const { element, isDisplay } = elementObj;
    const { y } = element.getBoundingClientRect();
    if (y <= 0 && !isDisplay) {
        elementObj.isDisplay = true;
        setDisplay(true);
    }
    else if (y > 0 && isDisplay) {
        elementObj.isDisplay = false;
        setDisplay(false);
    }
}

function Main() {
    const [isDisplay, setDisplay] = useState(false);
    useEffect(() => {
        const element = document.getElementById('works');
        elementObj.element = element;
        const debouncedHandleScroll = debounce(handleScroll, 300);
        if (element) {
            window.addEventListener('scroll', () => {
                debouncedHandleScroll(setDisplay);
            });
        }
    }, []);
    const names = isDisplay ?
        `${css(style.middleNavigation)} ${css(style.navigation)} ${css(style.displayNav)}` :
        `${css(style.middleNavigation)} ${css(style.navigation)} ${css(style.hideNav)}`
    return (
        <>
            <Greeting/>
            <Layout
                className={`${css(style.topNavigation)} ${css(style.navigation)}`}>
                <NavBar/>
            </Layout>
            <WorkList list={works}/>
            <SkillList/>
            <Footer/>
            <Layout
                className={names}>
                <NavBar/>
            </Layout>

        </>
    );
}

export default Main;
