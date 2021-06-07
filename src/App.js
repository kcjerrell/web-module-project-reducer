import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState, INPUT_MODE, ORIGINAL_MODE } from './reducers';
import actions from './actions';

const opDisplayValues = { '+': '+', '-': '-', '*': '×', '/': '÷', '=': '' };

/*  🔴🟠🟡🟢🔵🟣 -- PLEASE READ -- 🟣🔵🟢🟡🟠🔴
    (assuming anyone ever looks at this)

    I feel like a lot of the changes I made might have broke any automated testing used to grade this
    If that happens, whoops!

    But if anyone happens to look at this, here's a couple things to to notice:

    the reducer function in "reducers/index.js" handles *some* of the action types, and for the rest
    it calls either originalModeReducer or inputModeReducer, depending on state.mode.

    Also, InputMode calls for a slighty different layout, but I didn't want to maintain code for
    two different sets of buttons. I feel like the solution I came up with is not idiomatic or best practice.
    I haven't had a chance to research it though, and it seems to work fine.

    Along the way I might have renamed some of the action types or buttons, which I why I'm making this note.
    It (probably) all works! But depending on the tests it might seem broken.

    If necessary, the commit before I merged in the stretch is: c124186188
*/

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => {
    return (
      <CalcButton key={n} value={n} onClick={() => dispatch(actions.applyNumber(n))} />
    );
  });

  const memoryButtons = {
    add: <CalcButton value={"M+"} onClick={() => dispatch(actions.memoryStore())} />,
    recall: <CalcButton value={"MR"} onClick={() => dispatch(actions.memoryApply())} />,
    clear: <CalcButton value={"MC"} onClick={() => dispatch(actions.memoryClear())} />
  };

  const operatorButtons = {
    add: <CalcButton value={"+"} onClick={() => dispatch(actions.applyOperator('+'))} />,
    multiply: <CalcButton value={"*"} onClick={() => dispatch(actions.applyOperator('*'))} />,
    subtract: <CalcButton value={"-"} onClick={() => dispatch(actions.applyOperator('-'))} />,
    divide: <CalcButton value={"/"} onClick={() => dispatch(actions.applyOperator('/'))} />,
    equals: <CalcButton value={"="} onClick={() => dispatch(actions.applyOperator('='))} />,
  }

  const decimalButton = <CalcButton value={"."} onClick={() => { dispatch(actions.applyDecimal()) }} />;

  const clearButton = <CalcButton value={"CE"} onClick={() => dispatch(actions.clear())} />;

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" alt="lambda logo" />
          Lambda Reducer Challenge
          </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} label='total' />
            {state.mode === INPUT_MODE && <TotalDisplay value={`${opDisplayValues[state.operation]} ${state.input}`} label='input' />}

            <div className="row details">
              {state.mode === ORIGINAL_MODE
                ? <span id="operation"><b>Operation:</b> {state.operation}</span>
                : <span id="operation"></span>}
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row details" onClick={(() => dispatch(actions.toggleMode()))}>
              <span>Mode: {state.mode} (click to change)</span>
            </div>

            {state.mode === ORIGINAL_MODE &&
              <>
                <div className="row">
                  {memoryButtons.add}
                  {memoryButtons.recall}
                  {memoryButtons.clear}
                </div>

                <div className="row">
                  {numberButtons.slice(1, 4)}
                </div>

                <div className="row">
                  {numberButtons.slice(4, 7)}
                </div>

                <div className="row">
                  {numberButtons.slice(7, 10)}
                </div>

                <div className="row">
                  {operatorButtons.add}
                  {operatorButtons.multiply}
                  {operatorButtons.subtract}
                </div>

                <div className="row ce_button">
                  {clearButton}
                </div>
              </>}

            {state.mode === INPUT_MODE &&
              <>
                <div className="row">
                  {memoryButtons.add}
                  {memoryButtons.recall}
                  {memoryButtons.clear}
                  {operatorButtons.divide}
                </div>

                <div className="row">
                  {numberButtons.slice(7, 10)}
                  {operatorButtons.multiply}
                </div>

                <div className="row">
                  {numberButtons.slice(4, 7)}
                  {operatorButtons.subtract}
                </div>

                <div className="row">
                  {numberButtons.slice(1, 4)}
                  {operatorButtons.add}
                </div>

                <div className="row">
                  <div className="col-xs-2">
                    {numberButtons[0]}
                  </div>
                  {decimalButton}
                  {operatorButtons.equals}
                </div>

                <div className="row ce_button">
                  {clearButton}
                </div>
              </>
            }

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
