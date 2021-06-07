import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState, INPUT_MODE, ORIGINAL_MODE } from './reducers';
import actions from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => {
    return (
      <CalcButton key={n} value={n} onClick={() => dispatch(actions.applyNumber(n))} />
    )
  });

  const memoryButtons = {
    add: <CalcButton value={"M+"} onClick={() => dispatch(actions.memoryStore())} />,
    recall: <CalcButton value={"MR"} onClick={() => dispatch(actions.memoryApply())} />,
    clear: <CalcButton value={"MC"} onClick={() => dispatch(actions.memoryClear())} />
  };

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

            <div className="row details">
              {state.mode === ORIGINAL_MODE
                ? < span id="operation"><b>Operation:</b> {state.operation}</span>
                : <span id="operation"></span>}
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row details" onClick={(() => dispatch(actions.toggleMode()))}>
              <span>Mode: {state.mode} (click to change)</span>
            </div>

            <div className="row">
              {memoryButtons.add}
              {memoryButtons.recall}
              {memoryButtons.clear}
            </div>

            <div className="row">
              {/* <CalcButton value={1} onClick={() => dispatch(actions.applyNumber(1))} /> */}
              {numberButtons}
              <CalcButton value={2} onClick={() => dispatch(actions.applyNumber(2))} />
              <CalcButton value={3} onClick={() => dispatch(actions.applyNumber(3))} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => dispatch(actions.applyNumber(4))} />
              <CalcButton value={5} onClick={() => dispatch(actions.applyNumber(5))} />
              <CalcButton value={6} onClick={() => dispatch(actions.applyNumber(6))} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => dispatch(actions.applyNumber(7))} />
              <CalcButton value={8} onClick={() => dispatch(actions.applyNumber(8))} />
              <CalcButton value={9} onClick={() => dispatch(actions.applyNumber(9))} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => dispatch(actions.changeOperation('+'))} />
              <CalcButton value={"*"} onClick={() => dispatch(actions.changeOperation('*'))} />
              <CalcButton value={"-"} onClick={() => dispatch(actions.changeOperation('-'))} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(actions.clear())} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
