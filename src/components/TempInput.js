import React from 'react';

const TempInput = ({ type, value, convertTemp }) => {
	return (
		<div className='temp__group'>
			<label className='temp__label' for={`${type}-input`}>
				{type}
			</label>
			<div className='temp__wrapper'>
				<input
					className='temp__input'
					type='number'
					name={`${type}-input`}
					id={`${type}-input`}
					value={value}
					onChange={convertTemp}
				/>
				<span className='temp__span'></span>
			</div>
		</div>
	);
};

export default TempInput;
