import React from 'react';

const TempReset = (props) => (
  <button className='temp__btn' onClick={props.resetTemps}>
    {props.buttonText}
  </button>
);

export default TempReset;
