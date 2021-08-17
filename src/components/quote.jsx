import React from 'react';

const Quote = () => {
  const paragraphStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: '34px',
    paddingBottom: '150px',
    color: '#363c48',
  };
  return (
    <div>
      <p className="quote" style={paragraphStyle}>
        Mathmatics is not about numbers, equations, compulations, or algorithms:
        It is about understanding. -William Paul Thurstan
      </p>
    </div>
  );
};

export default Quote;
