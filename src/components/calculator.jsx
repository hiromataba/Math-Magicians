import React, { Component } from 'react';
import calculte from '../logic/calculator';
import Result from './result';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.rows = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
  }

  handleKeyPress = (event) => {
    const calculator = calculte(this.state, event.currentTarget.innerHTML);
    this.setState(calculator);
  };

  displayResult = (total, next, operation) => {
    if (total && operation && next) {
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

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <Result value={this.displayResult(total, next, operation)} />
        {this.rows.map((row) => (
          <div className="row-flex" key={row}>
            {row.map((key) => (
              <button
                className="btn"
                type="submit"
                onClick={(e) => this.handleKeyPress(e)}
                key={key}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Calculator;
