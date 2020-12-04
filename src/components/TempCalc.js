import React, { useState } from 'react';
import TempInput from './TempInput';

const TempCalc = () => {
	const [celsius, setCelsius] = useState(0);
	const [fahrenheit, setFahrenheit] = useState(0);
	const [kelvin, setKelvin] = useState(0);

	const convertFromCelsius = (e) => {
		setCelsius(+e.target.value);
		setFahrenheit((+e.target.value * 1.8 + 32).toFixed(2));
		setKelvin((+e.target.value + 273.15).toFixed(2));
	};

	const convertFromFahrenheit = (e) => {
		setCelsius(((+e.target.value - 32) / 1.8).toFixed(2));
		setFahrenheit(+e.target.value);
		setKelvin(((+e.target.value - 32) / 1.8 + 273.15).toFixed(2));
	};

	const convertFromKelvin = (e) => {
		setCelsius((+e.target.value - 273.15).toFixed(2));
		setFahrenheit(((+e.target.value - 273.15) * 1.8 + 32).toFixed(2));
		setKelvin(+e.target.value);
	};

	const resetTemps = () => {
		setCelsius(0);
		setFahrenheit(0);
		setKelvin(0);
	};

	return (
		<div className='temp__calc'>
			<h1 className='temp__heading'>Temperature Converter</h1>
			<TempInput type='celsius' value={celsius} convertTemp={convertFromCelsius} />
			<TempInput type='fahrenheit' value={fahrenheit} convertTemp={convertFromFahrenheit} />
			<TempInput type='kelvin' value={kelvin} convertTemp={convertFromKelvin} />
			<button className='temp__btn' onClick={resetTemps}>
				Reset
			</button>
		</div>
	);
};

export default TempCalc;
