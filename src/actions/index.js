export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const APPLY_DECIMAL = "APPLY_DECIMAL";
export const APPLY_OPERATOR = "APPLY_OPERATOR";
export const CLEAR = "CLEAR";
export const MEMORY_STORE = "MEMORY_STORE";
export const MEMORY_APPLY = "MEMORY_APPLY";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const TOGGLE_MODE = "TOGGLE_MODE";

export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    return ({ type: APPLY_NUMBER, payload: number });
}

export const applyDecimal = () => {
    return { type: APPLY_DECIMAL };
}

export const applyOperator = (operator) => {
    return { type: APPLY_OPERATOR, payload: operator };
}

export const clear = () => {
    return { type: CLEAR };
}

export const memoryStore = () => {
    return { type: MEMORY_STORE };
}

export const memoryApply = () => {
    return { type: MEMORY_APPLY };
}

export const memoryClear = () => {
    return { type: MEMORY_CLEAR };
}

export const toggleMode = () => {
    return { type: TOGGLE_MODE };
}

const actions = {
    APPLY_NUMBER, applyNumber,
    APPLY_DECIMAL, applyDecimal,
    APPLY_OPERATOR, applyOperator,
    CLEAR, clear,
    MEMORY_STORE, memoryStore,
    MEMORY_APPLY, memoryApply,
    MEMORY_CLEAR, memoryClear,
    TOGGLE_MODE, toggleMode,
};

export default actions;