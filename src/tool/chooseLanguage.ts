import { LanguageType, ENG, RUS, UKR } from "../redux/languages";

interface ITranslations <U>{
    eng: U,
    ukr: U,
    rus: U,
}

function chooseLanguage<T>(lang: LanguageType,
                           translations: ITranslations<T>): T {
    switch (lang) {
        case UKR: {
            return translations.ukr;
        }
        case RUS: {
            return translations.rus;
        }
        case ENG:
        default: {
            return translations.eng;
        }
    }
}

export default chooseLanguage;