import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_APPLY, MEMORY_CLEAR, MEMORY_STORE, TOGGLE_MODE } from './../actions';

export const ORIGINAL_MODE = "ORIGINAL";
export const INPUT_MODE = "INPUT"

export const initialState = {
    total: 0,
    input: 0,
    operation: "+",
    memory: 0,
    mode: "ORIGINAL"
}

const calculateResult = (num1, num2, operation) => {
    switch (operation) {
        case ("+"):
            return num1 + num2;
        case ("*"):
            return num1 * num2;
        case ("-"):
            return num1 - num2;
        default:
            return num1;
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case (ADD_ONE):
            return ({
                ...state,
                total: state.total + 1
            });

        case (APPLY_NUMBER):
            if (state.mode === ORIGINAL_MODE) {
                return ({
                    ...state,
                    total: calculateResult(state.total, action.payload, state.operation)
                });
            }
            else {
                const newInput = parseInt(state.input.toString() + action.payload.toString());
                return {
                    ...state,
                    input: newInput
                };
            }

        case (CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case CLEAR_DISPLAY:
            return {
                ...state,
                total: 0
            };

        case MEMORY_STORE:
            return {
                ...state,
                memory: state.total
            };

        case MEMORY_APPLY:
            return {
                ...state,
                total: calculateResult(state.total, state.memory, state.operation)
            };

        case MEMORY_CLEAR:
            return {
                ...state,
                memory: 0
            };

        case TOGGLE_MODE:
            return {
                ...state,
                mode: state.mode === ORIGINAL_MODE ? INPUT_MODE : ORIGINAL_MODE,
            };

        default:
            console.log(`unknown action type requested: ${action.type}`)
            return state;
    }
}

export default reducer;