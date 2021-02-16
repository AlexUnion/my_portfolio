import { createSlice } from "@reduxjs/toolkit";
import * as lang from './languages';

export interface ILanguage {
    currentLang: lang.LanguageType
}

const initialState: ILanguage = {
    currentLang: lang.ENG
}

//createSlice take care of the work of generation action type

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        toEng: (state: ILanguage) => {
            state.currentLang = lang.ENG;
        },
        toUkr: (state: ILanguage) => {
            state.currentLang = lang.UKR;
        },
        toRus: (state: ILanguage) => {
            state.currentLang = lang.RUS;
        }
    }
})

export const langActions = langSlice.actions;

export default langSlice.reducer;