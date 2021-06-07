export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_STORE = "MEMORY_STORE";
export const MEMORY_APPLY = "MEMORY_APPLY";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const TOGGLE_MODE = "TOGGLE_MODE";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return { type: CHANGE_OPERATION, payload: operation };
}

export const clearDisplay = () => {
    return { type: CLEAR_DISPLAY };
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