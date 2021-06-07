import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState, INPUT_MODE } from './reducers';
import { changeOperation, applyNumber, clearDisplay, memoryStore, memoryApply, memoryClear, toggleMode } from './actions'

// const initialState = {value: 0, memory: 0}

// function reducer(state, action) {
//   const { op, operand } = action;
//   const { value, memory } = state;

//   switch (op) {
//     case 'ADD': // Add

//       break;
//     case 'SUB':   // Subtract

//       break;
//     case 'MULT':  // Multiply

//       break;
//     case 'DIV':   // Divide

//       break;
//     case 'CLEAR': // Clear

//       break;
//     case 'M+':    // Add to memory

//       break;
//     case 'MR':    // Recall from memory

//       break;
//     case 'MC':    // Clear memory

//       break;
//     default:
//       break;
//   }
// }

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} label='total' />
            {state.mode === INPUT_MODE && <TotalDisplay value={state.input} label='input' />}
            <div className="row details" onClick={(() => dispatch(toggleMode()))}>
              <span>Mode: {state.mode} (click to change)</span>
            </div>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(memoryStore())} />
              <CalcButton value={"MR"} onClick={() => dispatch(memoryApply())} />
              <CalcButton value={"MC"} onClick={() => dispatch(memoryClear())} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => dispatch(applyNumber(1))} />
              <CalcButton value={2} onClick={() => dispatch(applyNumber(2))} />
              <CalcButton value={3} onClick={() => dispatch(applyNumber(3))} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => dispatch(applyNumber(4))} />
              <CalcButton value={5} onClick={() => dispatch(applyNumber(5))} />
              <CalcButton value={6} onClick={() => dispatch(applyNumber(6))} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => dispatch(applyNumber(7))} />
              <CalcButton value={8} onClick={() => dispatch(applyNumber(8))} />
              <CalcButton value={9} onClick={() => dispatch(applyNumber(9))} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => dispatch(changeOperation('+'))} />
              <CalcButton value={"*"} onClick={() => dispatch(changeOperation('*'))} />
              <CalcButton value={"-"} onClick={() => dispatch(changeOperation('-'))} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
