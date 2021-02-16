import { configureStore } from "@reduxjs/toolkit";
import langReducer, { ILanguage } from './langSlice';

export interface IStore {
    lang: ILanguage,
}

export default configureStore({
    reducer: {
        lang: langReducer,
    }
})
