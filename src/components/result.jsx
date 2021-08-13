/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import propTypes from 'prop-types';

class Result extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="result">
        <input type="text" value={value} />
      </div>
    );
  }
}

Result.propTypes = {
  value: propTypes.number.isRequired,
};
export default Result;
