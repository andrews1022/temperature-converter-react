import React from 'react';
import TempCalc from './components/TempCalc';
import './scss/app.min.css';

const App = () => {
	return (
		<div className='temp'>
			<TempCalc />
		</div>
	);
};

export default App;
