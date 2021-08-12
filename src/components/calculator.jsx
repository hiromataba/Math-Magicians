import React, { Component } from 'react';
import calculte from '../logic/calculator';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
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
        <div className="result">
          <input
            type="text"
            value={this.displayResult(total, next, operation)}
          />
        </div>
        <div className="row-flex">
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            AC
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            +/-
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            %
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            ÷
          </button>
        </div>
        <div className="row-flex">
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            7
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            8
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            9
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            x
          </button>
        </div>
        <div className="row-flex">
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            4
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            5
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            6
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            -
          </button>
        </div>
        <div className="row-flex">
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            1
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            2
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            3
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            +
          </button>
        </div>
        <div className="row-flex">
          <button
            className="btn zero"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            0
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            .
          </button>
          <button
            className="btn"
            type="submit"
            onClick={(e) => this.handleKeyPress(e)}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
