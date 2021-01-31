import Actions from "./actions";
import { IActionType, IState } from "./interfaces";
import { ENG, RUS, UKR } from './languages';

const initialValue : IState = {
    currentLang: ENG,
};

function langReducer(state = initialValue, action: IActionType) : IState {
    switch (action.type) {
        case Actions.TO_ENG: {
            return {
                ...state,
                currentLang: ENG,
            }
        }
        case Actions.TO_UKR: {
            return {
                ...state,
                currentLang: UKR,
            }
        }
        case Actions.TO_RUS: {
            return {
                ...state,
                currentLang: RUS,
            }
        }
        default: {
            return state;
        }
    }
}

export default langReducer;