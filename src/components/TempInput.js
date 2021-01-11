import React from 'react';

const TempInput = ({ tempType, tempState, dispatch }) => {
	return (
		<div className='temp__group'>
			<label className='temp__label' htmlFor={`temp_${tempType}`}>
				{tempType}
			</label>
			<input
				className='temp__input'
				type='number'
				name={`temp_${tempType}`}
				id={`temp_${tempType}`}
				value={tempState[tempType]} // dynamically set the value of the input using 'object[property]' syntax
				onChange={(e) => dispatch({ type: `convert_${tempType}`, payload: e.target.value })}
			/>
		</div>
	);
};

export default TempInput;
