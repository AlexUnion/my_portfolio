import { createSlice } from "@reduxjs/toolkit";
import { ENG, RUS, UKR } from './languages';

const langSlice = createSlice({
    name: 'lang',
    initialState: {
        currentLanguage: ENG,
    },
    reducers: {
        toEng: (state) => {
            console.log('to eng');
            state.currentLanguage = ENG;
        },
        toUkr: (state) => {
            console.log('to ukr');
            state.currentLanguage = UKR;
        },
        toRus: (state) => {
            console.log('to rus');
            state.currentLanguage = RUS;
        }
    }
})

export const { toEng, toRus, toUkr } = langSlice.actions;

export default langSlice.reducer;