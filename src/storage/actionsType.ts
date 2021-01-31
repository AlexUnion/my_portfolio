import Actions from './actions';
import { IActionType } from "./interfaces";

export const changeToEng = (): IActionType => ({
    type: Actions.TO_ENG,
});

export const changeToUkr = (): IActionType => ({
    type: Actions.TO_UKR,
});

export const changeToRus = (): IActionType => ({
    type: Actions.TO_RUS,
});