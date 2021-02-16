import React from 'react';
import s from  './navbar.module.scss';
import { LanguageType, ENG, RUS, UKR } from '../../redux/languages';

interface ILanguage {
    greeting: string,
    works: string,
    skills: string,
}
interface INavbar {
    eng: ILanguage,
    ukr: ILanguage,
    rus: ILanguage,
}
interface IProps {
    lang: LanguageType,
}

const translations: INavbar = {
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
    let currentTranslation: ILanguage | null = null;
    switch (lang) {
        case UKR: {
            currentTranslation = translations.ukr;
            break;
        }
        case RUS: {
            currentTranslation = translations.rus;
            break;
        }
        case ENG:
        default: {
            currentTranslation = translations.eng;
            break;
        }
    }
    return (
        <div className={s.linksContainer}>
            <a href="#greeting" onClick={scrollTo}>{currentTranslation.greeting}</a>
            <a href="#works" onClick={scrollTo}>{currentTranslation.works}</a>
            <a href="#skills" onClick={scrollTo}>{currentTranslation.skills}</a>
        </div>
    )
}

export default Navbar;