import React, { useState } from 'react';
import calculte from '../logic/calculator';
import Result from './result';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const rows = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const handleKeyPress = (event) => {
    const calculator = calculte(state, event.currentTarget.innerHTML);
    setState({ ...state, ...calculator });
  };

  const displayResult = (total, next, operation) => {
    if (total && next && operation) {
      return `${total} ${operation} ${next}`;
    }
    if (!total && !operation && !next) {
      return '0';
    }
    if (next) {
      return `${next}`;
    }
    if (total && operation) {
      return `${total}${operation}`;
    }
    if (!next && !operation) {
      return `${total}`;
    }
    return '0';
  };
  const { total, next, operation } = state;
  return (
    <div className="calculator-page">
      <div className="welcome-txt">
        <h2>Let us do some Math !</h2>
      </div>
      <div className="calculator">
        <Result value={displayResult(total, next, operation)} />
        {rows.map((row) => (
          <div className="row-flex" key={row}>
            {row.map((key) => (
              <button
                className="btn"
                type="submit"
                onClick={(e) => handleKeyPress(e)}
                key={key}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
