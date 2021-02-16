import React from "react";
import s from './greeting.module.scss';
import { LanguageType, ENG, RUS, UKR } from '../../redux/languages';

interface ILanguage {
    upperString: string,
    profession: string,
    underString: string,
}

interface IGreeting {
    eng: ILanguage,
    ukr: ILanguage,
    rus: ILanguage,
}

type Props = {
    lang: LanguageType,
}

const languages: IGreeting = {
    eng: {
        upperString: 'Hello, my name is Alex Kyrychenko and I am',
        profession: 'WEB DEVELOPER',
        underString: 'creating modern and responsive Web Application'
    },
    ukr: {
        upperString: 'Привіт, моє ім`я - Олексій Кириченко і я',
        profession: 'ВЕБ РОЗРОБНИК',
        underString: 'створюю сучасні та адаптивні веб-додатки'
    },
    rus: {
        upperString: 'Здравствуй, меня зовут Алексей Кириченко и я',
        profession: 'ВЕБ РАЗРАБОТЧИК',
        underString: 'создаю сучасные и адаптивные веб-приложения'
    }
}

function Greeting(props: Props): React.ReactElement {
    const { lang } = props;
    let currentLanguage: ILanguage | null = null;
    switch (lang) {
        case UKR: {
            currentLanguage = languages.ukr;
            break;
        }
        case RUS: {
            currentLanguage = languages.rus;
            break;
        }
        case ENG:
        default: {
            currentLanguage = languages.eng;
        }
    }
    return (
        <div className={s.header} id="greeting">
            <div className={s.header_container}>
                <div>
                    <p className={s.p}>{currentLanguage.upperString}</p>
                    <p className={`${s.p} ${s.bold}`}>{currentLanguage.profession}</p>
                    <p className={s.p}>{currentLanguage.underString}</p>
                </div>
            </div>
        </div>
    )
}

export default Greeting;
