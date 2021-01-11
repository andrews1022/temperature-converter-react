import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TempCalc from './components/TempCalc';
import './scss/app.min.css';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<TempCalc />
			<Footer />
		</div>
	);
};

export default App;
