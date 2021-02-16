import { LanguageType, ENG, RUS, UKR } from "../redux/languages";

function chooseLanguage<T>(lang: LanguageType,
                           translations: {eng: T, ukr: T, rus: T}): T {
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