import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="result">
          <input type="text" />
        </div>
        <div className="row-flex">
          <button className="btn" type="submit">AC</button>
          <button className="btn" type="submit">+/-</button>
          <button className="btn" type="submit">&#247;</button>
          <button className="btn" type="submit">&#43;</button>
        </div>
        <div className="row-flex">
          <button className="btn" type="submit">7</button>
          <button className="btn" type="submit">8</button>
          <button className="btn" type="submit">9</button>
          <button className="btn" type="submit">&#215;</button>
        </div>
        <div className="row-flex">
          <button className="btn" type="submit">4</button>
          <button className="btn" type="submit">5</button>
          <button className="btn" type="submit">6</button>
          <button className="btn" type="submit">&#8722;</button>
        </div>
        <div className="row-flex">
          <button className="btn" type="submit">1</button>
          <button className="btn" type="submit">2</button>
          <button className="btn" type="submit">3</button>
          <button className="btn" type="submit">&#215;</button>
        </div>
        <div className="row-flex">
          <button className="btn zero" type="submit">0</button>
          <button className="btn" type="submit">.</button>
          <button className="btn" type="submit">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
