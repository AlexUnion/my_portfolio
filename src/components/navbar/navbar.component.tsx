import React from 'react';
import s from  './navbar.module.scss';
import { LanguageType } from '../../redux/languages';
import chooseLanguage from "../../tool/chooseLanguage";
import ITranslations from "../../interfaces/translations";

interface IFields {
    greeting: string,
    works: string,
    skills: string,
}

interface IProps {
    lang: LanguageType,
}

const translations: ITranslations<IFields> = {
    eng: {
        greeting: 'Greeting',
        works: 'My works',
        skills: 'My skills',
    },
    ukr: {
        greeting: 'Вітання',
        works: 'Мої проекти',
        skills: 'Мої навики',
    },
    rus: {
        greeting: 'Приветствие',
        works: 'Работы',
        skills: 'Навыки',
    }
}

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetElement: HTMLLinkElement = e.target as HTMLLinkElement;
    const scrollID = targetElement.getAttribute('href');
    if (scrollID) {
        document.querySelector(scrollID)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function Navbar(props: IProps): React.ReactElement {
    const { lang } = props;
    let currentTranslation: IFields = chooseLanguage<IFields>(lang, translations);
    return (
        <div className={s.linksContainer}>
            <a href="#greeting" onClick={scrollTo}>{currentTranslation.greeting}</a>
            <a href="#works" onClick={scrollTo}>{currentTranslation.works}</a>
            <a href="#skills" onClick={scrollTo}>{currentTranslation.skills}</a>
        </div>
    )
}

export default Navbar;