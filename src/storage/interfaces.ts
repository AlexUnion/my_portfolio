import { LanguageType } from "./languages";
import { ActionType } from "./actions";

export interface IState {
    currentLang: LanguageType,
}
export interface IActionType {
    type: ActionType,
}