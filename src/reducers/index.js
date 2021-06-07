import actions from './../actions';
import { inputModeReducer } from './inputMode';
import { originalModeReducer } from './originalMode';

export const ORIGINAL_MODE = "ORIGINAL";
export const INPUT_MODE = "INPUT"

export const initialState = {
    total: 0,
    input: 0,
    operation: "+",
    memory: 0,
    mode: "ORIGINAL"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actions.TOGGLE_MODE:
            return {
                ...state,
                mode: state.mode === ORIGINAL_MODE ? INPUT_MODE : ORIGINAL_MODE,
                input: initialState.input,
                operation: initialState.operation
            };

        case actions.CLEAR:
            return {
                ...state,
                total: initialState.total,
                operation: initialState.operation,
                input: initialState.input
            };

        case actions.MEMORY_STORE:
            return {
                ...state,
                memory: state.total
            };

        case actions.MEMORY_CLEAR:
            return {
                ...state,
                memory: 0
            };

        default:
            if (state.mode === ORIGINAL_MODE)
                return originalModeReducer(state, action);
            else if (state.mode === INPUT_MODE)
                return inputModeReducer(state, action)
    }

    console.log(`reducer function unmatched: ${action} (mode: ${state.mode})`);
    return state;
}

export default reducer;