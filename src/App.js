import React from 'react';
import Header from './Header';
import TempCalc from './TempCalc';
import './App.css';

const App = () => {
  return (
    <div className='temp'>
      <Header title='temperature converter' />
      <TempCalc />
    </div>
  );
};

export default App;
