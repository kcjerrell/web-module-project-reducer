import actions from "../actions";

const calculateResult = (num1, num2, operation) => {
	if (isNaN(num2))
		return num1;

	const calc = () => {
		switch (operation) {
			case ("+"):
				return num1 + num2;
			case ("*"):
				return num1 * num2;
			case ("-"):
				return num1 - num2;
			case ("/"):
				return num1 / num2;
			case ("="):
				return num2;
			default:
				return num1;
		}
	}

	return parseFloat(calc().toFixed(8));
}

const clearLeadingZeroes = (input) => {
	const split = input.split('.');
	split[0] = parseInt(split[0]).toString();
	return split.join('.');
}

export const inputModeReducer = (state, action) => {
	switch (action.type) {
		case actions.APPLY_NUMBER:
			return {
				...state,
				input: clearLeadingZeroes(state.input + action.payload.toString())
			};

		case actions.APPLY_DECIMAL:
			return {
				...state,
				input: state.input.includes('.') ? state.input : (state.input ? state.input : '0') + '.'
			};

		// APPLY_OPERATOR performs state.operation against state.total and state.input
		// stores that value in state.total
		// resets state.input to 0
		// and stores the new operation in state.operation
		// I think
		case actions.APPLY_OPERATOR:

			const newTotal = calculateResult(state.total, parseFloat(state.input), state.operation);
			const newOp = action.payload;
			const newInput = '';
			return {
				...state,
				operation: newOp,
				total: newTotal,
				input: newInput
			};

		// memory recall replaces the current input with the stored value
		case actions.MEMORY_APPLY:
			return {
				...state,
				input: state.memory.toString()
			};

		default:
			console.log(`unknown action type requested: ${action.type}`)
			return state;
	}
}