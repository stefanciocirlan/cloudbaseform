import { initialState } from "../store/store";
import { checkEmail, checkName } from "../utils/inputValidation"

export const isValidReducer = (state, action) => {
    if (action.type == 'reset') {
        return initialState;
    }
    try {

        const isValid = action.type === 'name' ? checkName(action.value) : checkEmail(action.value);

        switch (isValid) {
            case true:
                return { ...state, isValid: true, value: action.value };
            case false:
                return { ...state, isValid: false, value: action.value };

            default:
                return { ...state };
        }
    } catch {

    }
}