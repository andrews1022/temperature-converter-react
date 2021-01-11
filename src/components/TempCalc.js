import React, { useReducer } from 'react';
import TempInput from './TempInput';
import { initialTemps, tempReducer } from './../reducers/tempReducer';

const TempCalc = () => {
	const [tempState, dispatch] = useReducer(tempReducer, initialTemps);

	return (
		<div className='temp'>
			{/* for each key in the temp state object, create a TempInput component for it */}
			{Object.keys(tempState).map((tempType, idx) => (
				<TempInput key={idx} tempType={tempType} tempState={tempState} dispatch={dispatch} />
			))}

			<div className='temp__group'>
				<button className='temp__reset' onClick={() => dispatch({ type: 'reset_temps' })}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default TempCalc;
