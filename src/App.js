import React from 'react';
import Header from './components/Header';
import TempCalc from './components/TempCalc';
import './scss/app.min.css';

const App = () => {
  return (
    <div className='temp'>
      <Header title='temperature converter' />
      <TempCalc />
    </div>
  );
};

export default App;
