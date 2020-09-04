import React from 'react';

const TempInput = (props) => {
  return (
    <div className='temp__group'>
      <label className='temp__label' for={`${props.type}-input`}>
        {props.type}
      </label>
      <div className='temp__wrapper'>
        <input
          className='temp__input'
          type='number'
          name={`${props.type}-input`}
          id={`${props.type}-input`}
          value={props.value}
          onChange={props.convertTemp}
        />
        <span className='temp__span'></span>
      </div>
    </div>
  );
};

export default TempInput;
