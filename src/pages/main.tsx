import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import debounce from "../tool/debounce";
import Greeting from "../components/greeting/greeting.component";
import NavBar from "../components/navbar/navbar.component";
import WorkList from "../components/workList/workList.component";
import SkillList from "../components/skillList/skillList.component";
import Footer from "../components/footer/footer.component";
import Switcher from "../components/switcher/switcher.component";
import Layout from "../layout/Layout";
import works from "../data/works";
import ContainerLayout from "../layout/ContainerLayout";

interface IProps {
    lang: string,
}

type Element = {
    element: HTMLElement | null,
    isDisplay: boolean,
}

const popUpMenu: Element = {
    element: null,
    isDisplay: false,
}

const style = StyleSheet.create({
    topNavigation: {
        height: '80px',
        backgroundColor: 'rgba(255, 255, 255, .35)',
        position: 'absolute',
    },
    middleNavigation: {
        backgroundColor: '#333',
        position: 'fixed',
    },
    hideNav: {
        height: '0',
        opacity: 0,
    },
    displayNav: {
        height: '80px',
        opacity: 1,
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

function handleScroll(setDisplay: React.Dispatch<React.SetStateAction<boolean>>) {
    const { element, isDisplay } = popUpMenu;
    if (element) {
        const { y } = element.getBoundingClientRect();
        if (y <= 0 && !isDisplay) {
            popUpMenu.isDisplay = true;
            setDisplay(true);
        }
        else if (y > 0 && isDisplay) {
            popUpMenu.isDisplay = false;
            setDisplay(false);
        }
    }
}

function Main(props: IProps) {
    const { lang: currentLang } = props;
    const [isDisplay, setDisplay] = useState(false);
    useEffect(() => {
        const element: HTMLElement | null = document.getElementById('works');
        popUpMenu.element = element;
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
            <Greeting lang={currentLang}/>
            <Layout
                className={`${css(style.topNavigation)} ${css(style.navigation)}`}>
                <NavBar lang={currentLang}/>
            </Layout>
            <ContainerLayout id="works" className='workList'>
                <WorkList list={works} lang={currentLang}/>
            </ContainerLayout>
            <ContainerLayout id="skills" className='skillList'>
                <SkillList/>
            </ContainerLayout>
            <Footer/>
            <Layout
                className={names}>
                <NavBar lang={currentLang}/>
            </Layout>
            <Switcher timeOut={1000}/>
        </>
    );
}

export default Main;
