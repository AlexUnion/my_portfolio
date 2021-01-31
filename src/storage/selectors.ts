import { IState } from "./interfaces";

const selectCurrentLanguage = (state: IState): string => state.currentLang;
// const curLang = selectCurrentLang(store.getState());