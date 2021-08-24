/* eslint-disable react/prefer-stateless-function */
import propTypes from 'prop-types';

const Result = (props) => {
  const { value } = props;
  return (
    <div className="result">
      <input type="text" value={value} />
    </div>
  );
};

Result.propTypes = {
  value: propTypes.number.isRequired,
};
export default Result;
