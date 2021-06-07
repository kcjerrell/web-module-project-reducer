import actions from "../actions";

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

export const originalModeReducer = (state, action) => {
	switch (action.type) {
		case (actions.APPLY_NUMBER):
			return ({
				...state,
				total: calculateResult(state.total, action.payload, state.operation)
			});

		case (actions.CHANGE_OPERATION):
			return ({
				...state,
				operation: action.payload
			});

		case actions.MEMORY_APPLY:
			return {
				...state,
				total: calculateResult(state.total, state.memory, state.operation)
			};

		default:
			console.log(`unknown action type requested: ${action.type}`)
			return state;
	}
}