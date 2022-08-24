import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Componenteheader} from './componente-header';
import {Componentebody} from './componentebody';

function App() {
  return (
    <React.Fragment>
      <Componenteheader />
      <Componentebody />
    </React.Fragment>
  );
}

export default App;
